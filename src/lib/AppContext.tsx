import { createContext, FC, useEffect, useState } from "react";
import axios from "axios";

import { Pantry } from "utils/types";
import { GOOGLE_SHEET } from "utils/constants";
import { formatPantries } from "utils/formatters";
import { useLocalStorage } from "utils/hooks";
import { unique } from "utils/functions";

interface Props {
  pantries: Pantry[];
  loadingPantries: boolean;
  favorites: string[];
  recentSearches: string[];
  addFavorite: (value: string) => void;
  removeFavorite: (value: string) => void;
  addRecentSearches: (value: string) => void;
  clearRecentSearches: () => void;
}

const DEFAULT_STATE: Props = {
  pantries: [],
  loadingPantries: false,
  favorites: [],
  recentSearches: [],
  addFavorite: (_) => {},
  removeFavorite: (_) => {},
  addRecentSearches: (_) => {},
  clearRecentSearches: () => {},
};

export const AppContext = createContext<Props>(DEFAULT_STATE);

const AppContextProvider: FC = ({ children }) => {
  const [pantries, setPantries] = useState<Pantry[]>([]);
  const [loadingPantries, setLoadingPantries] = useState(false);

  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);
  const [recentSearches, setRecentSearches] = useLocalStorage<string[]>(
    "recentSearches",
    []
  );

  const addFavorite = (id: string) => setFavorites(unique([...favorites, id]));
  const removeFavorite = (id: string) =>
    setFavorites(favorites.filter((favorite) => favorite !== id));
  const addRecentSearches = (id: string) => {
    setRecentSearches(unique([id, ...recentSearches]).slice(0, 5));
  };
  const clearRecentSearches = () => setRecentSearches([]);

  useEffect(() => {
    if (pantries && loadingPantries) return;
    setLoadingPantries(true);
    axios
      .get(GOOGLE_SHEET)
      .then((res) => {
        const data = res.data.feed.entry;
        setPantries(formatPantries(data));
      })
      .finally(() => {
        setLoadingPantries(false);
      });
  }, [pantries]);

  return (
    <AppContext.Provider
      value={{
        pantries,
        loadingPantries,
        favorites,
        recentSearches,
        addFavorite,
        removeFavorite,
        addRecentSearches,
        clearRecentSearches,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

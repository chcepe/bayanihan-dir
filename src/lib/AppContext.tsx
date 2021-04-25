import { createContext, FC, useEffect, useState } from "react";
import axios from "axios";

import { Pantry } from "utils/types";
import { GOOGLE_SHEET } from "utils/constants";
import { formatPantries } from "utils/formatters";

interface Props {
  pantries: Pantry[];
  loadingPantries: boolean;
}

const DEFAULT_STATE: Props = {
  pantries: [],
  loadingPantries: false,
};

export const AppContext = createContext<Props>(DEFAULT_STATE);

const AppContextProvider: FC = ({ children }) => {
  const [pantries, setPantries] = useState<Pantry[]>([]);
  const [loadingPantries, setLoadingPantries] = useState(false);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

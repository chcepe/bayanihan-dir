import React, { FC, useContext, useRef, useState } from "react";
import { useHistory } from "react-router";
import { useOnClickOutside } from "utils/hooks";
import { AiFillCloseCircle } from "react-icons/ai";

import SearchBar from "components/shared/SearchBar";
import Button from "components/shared/Button";
import { AppContext } from "lib/AppContext";
import { searchPantry } from "utils/functions";

import * as S from "./styles";

const SuggestionsSearch: FC = () => {
  const {
    pantries,
    recentSearches,
    addRecentSearches,
    clearRecentSearches,
  } = useContext(AppContext);
  const { push } = useHistory();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  const visiblePantries = searchPantry(pantries, search);

  useOnClickOutside(ref, () => setShowSuggestions(false));

  const searchHistory = recentSearches.map((recentId) => {
    const pantryItem = pantries.find((pantry) => pantry.id === recentId);
    return {
      id: recentId,
      name: pantryItem?.name ?? "",
    };
  });

  const showSuggestionsList = search.length > 0;
  const showRecentSearches = searchHistory.length > 0 && !showSuggestionsList;

  return (
    <S.Wrapper ref={ref}>
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        // onBlur={() => setShowSuggestions(false)}
        onFocus={() => setShowSuggestions(true)}
        placeholder="Find community pantry nearby"
      />
      {showSuggestions && (
        <S.Suggestions>
          {showRecentSearches && (
            <S.RecentSearches>
              <p>
                Recent searches{" "}
                <AiFillCloseCircle onClick={() => clearRecentSearches()} />
              </p>
              <div>
                {searchHistory.map(({ name, id }) => (
                  <Button
                    marginR="sm"
                    size="sm"
                    text={name}
                    key={id}
                    icon="AiOutlineSearch"
                    onClick={() => push(`/map/${id}`)}
                  />
                ))}
              </div>
            </S.RecentSearches>
          )}
          {showSuggestionsList && (
            <>
              {visiblePantries.map(({ id, name, loc }) => (
                <S.SuggestionItem
                  onClick={() => {
                    addRecentSearches(id);
                    push(`/map/${id}`);
                  }}
                  key={`suggestion-${id}`}
                >
                  <strong>{name}</strong>
                  <span>{loc}</span>
                </S.SuggestionItem>
              ))}
            </>
          )}
        </S.Suggestions>
      )}
    </S.Wrapper>
  );
};

export default SuggestionsSearch;

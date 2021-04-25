import React, { FC, useContext, useState } from "react";

import SearchBar from "components/shared/SearchBar";
import Button from "components/shared/Button";
import { AppContext } from "lib/AppContext";
import { searchPantry } from "utils/functions";

import * as S from "./styles";

const SuggestionsSearch: FC = () => {
  const { pantries } = useContext(AppContext);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [search, setSearch] = useState("");

  const visiblePantries = searchPantry(pantries, search);

  const showRecentSearches = !search.length;

  return (
    <S.Wrapper>
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onBlur={() => setShowSuggestions(false)}
        onFocus={() => setShowSuggestions(true)}
        placeholder="Find community pantry nearby"
      />
      {showSuggestions && (
        <S.Suggestions>
          {showRecentSearches ? (
            <S.RecentSearches>
              <p>Recent searches</p>
              <div>
                <Button
                  marginR="sm"
                  size="sm"
                  text="Test"
                  icon="AiOutlineSearch"
                />
                <Button
                  marginR="sm"
                  size="sm"
                  text="Test"
                  icon="AiOutlineSearch"
                />
              </div>
            </S.RecentSearches>
          ) : (
            <>
              {visiblePantries.map(({ id, name, loc }) => (
                <S.SuggestionItem key={`suggestion-${id}`}>
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

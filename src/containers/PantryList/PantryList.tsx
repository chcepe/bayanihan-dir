import React, { FC, useContext, useState } from "react";

import PantryItem from "components/shared/PantryItem";
import Section from "components/shared/Section";
import { AppContext } from "lib/AppContext";
import { PANTRIES_PER_PAGE } from "utils/constants";
import Button from "components/shared/Button";
import SearchBar from "components/shared/SearchBar";
import { searchPantry } from "utils/functions";

import * as S from "./styles";

type Filter = "all" | "favorites";

const PantryList: FC = () => {
  const { pantries, loadingPantries, favorites } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(PANTRIES_PER_PAGE);
  const [filter, setFilter] = useState<Filter>("all");

  let visiblePantries =
    filter === "all"
      ? pantries
      : pantries.filter((pantry) => favorites.includes(pantry.id));
  visiblePantries = search
    ? searchPantry(visiblePantries, search)
    : visiblePantries;
  const totalPantries = visiblePantries.length;
  const pantriesList = visiblePantries.slice(0, page);

  return (
    <Section>
      {loadingPantries ? (
        <S.StyledLoading />
      ) : (
        <>
          <S.Header>
            <h2>Community Pantries ({pantries.length})</h2>
            <SearchBar onChange={(e) => setSearch(e.target.value)} />
          </S.Header>
          <S.Filters>
            <S.FilterItem
              onClick={() => setFilter("all")}
              active={filter === "all"}
            >
              All
            </S.FilterItem>
            <S.FilterItem
              onClick={() => setFilter("favorites")}
              active={filter === "favorites"}
            >
              Favorites
            </S.FilterItem>
          </S.Filters>
          {totalPantries > 0 ? (
            <>
              <S.List>
                {pantriesList.map((pantry) => (
                  <PantryItem key={pantry.id} {...pantry} />
                ))}
              </S.List>
              {page < totalPantries && (
                <S.Actions>
                  <Button
                    iconPos="right"
                    text="Show more"
                    onClick={() => setPage(page + PANTRIES_PER_PAGE)}
                  />
                </S.Actions>
              )}
            </>
          ) : (
            <p>No pantries found.</p>
          )}
        </>
      )}
    </Section>
  );
};

export default PantryList;

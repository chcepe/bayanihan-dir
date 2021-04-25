import React, { FC, useContext, useState } from "react";

import PantryItem from "components/shared/PantryItem";
import Section from "components/shared/Section";
import { AppContext } from "lib/AppContext";
import { PANTRIES_PER_PAGE } from "utils/constants";
import Button from "components/shared/Button";
import SearchBar from "components/shared/SearchBar";
import { searchPantry } from "utils/functions";

import * as S from "./styles";

const PantryList: FC = () => {
  const { pantries, loadingPantries } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(PANTRIES_PER_PAGE);

  const visiblePantries = search ? searchPantry(pantries, search) : pantries;
  const totalPantries = visiblePantries.length;
  const pantriesList = visiblePantries.slice(0, page);

  return (
    <Section>
      {loadingPantries ? (
        <S.StyledLoading />
      ) : (
        <>
          <S.Header>
            <h2>Community Pantry ({pantries.length})</h2>
            <SearchBar onChange={(e) => setSearch(e.target.value)} />
          </S.Header>
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
                    icon="AiOutlineDoubleRight"
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

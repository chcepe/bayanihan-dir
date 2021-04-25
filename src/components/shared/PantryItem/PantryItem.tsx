import { Tooltip } from "antd";
import { useHistory } from "react-router";
import React, { FC, useContext } from "react";

import { AppContext } from "lib/AppContext";
import { Pantry } from "utils/types";

import * as S from "./styles";

const PantryItem: FC<Pantry> = ({ id, name, desc, coords, loc }) => {
  const { push } = useHistory();
  const { favorites, addFavorite, removeFavorite } = useContext(AppContext);

  const isFavorite = favorites.includes(id);

  return (
    <S.Wrapper onClick={() => push(`/map/${id}`)}>
      <S.Img type="4:3">
        <img
          src={`https://static-maps.yandex.ru/1.x/?lang=en-US&ll=${coords.long},${coords.lat}&z=13&l=map&size=600,300`}
          loading="lazy"
        />
        <S.Overlay>
          {loc && (
            <S.Location>
              <S.IcLocation />
              <span>{loc}</span>
            </S.Location>
          )}
        </S.Overlay>
        <S.Hover>
          <Tooltip title={isFavorite ? "Remove" : "Add to favorites"}>
            <S.IcHeart
              active={isFavorite}
              onClick={(e) => {
                e.stopPropagation();
                isFavorite ? removeFavorite(id) : addFavorite(id);
              }}
            />
          </Tooltip>
        </S.Hover>
      </S.Img>
      <S.Content>
        <span>{name}</span>
        <p>{desc}</p>
      </S.Content>
    </S.Wrapper>
  );
};

export default PantryItem;

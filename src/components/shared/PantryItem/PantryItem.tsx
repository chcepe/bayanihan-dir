import { useHistory } from "react-router";
import React, { FC } from "react";

import FavoriteBtn from "components/shared/FavoriteBtn";
import { Pantry } from "utils/types";

import * as S from "./styles";

const PantryItem: FC<Pantry> = ({ id, name, desc, coords, loc }) => {
  const { push } = useHistory();

  return (
    <S.Wrapper
      onClick={() => {
        push(`/map/${id}`);
        window.scrollTo(0, 0);
      }}
    >
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
          <FavoriteBtn id={id} />
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

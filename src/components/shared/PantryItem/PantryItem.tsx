import { Tooltip } from "antd";
import React, { FC } from "react";

import { Pantry } from "utils/types";

import * as S from "./styles";

const PantryItem: FC<Pantry> = ({ name, desc, coords, loc }) => {
  return (
    <S.Wrapper>
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
          <Tooltip title="Add to favorites">
            <S.IcHeart />
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

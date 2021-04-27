import React, { FC, useContext } from "react";
import { AppContext } from "lib/AppContext";

import * as S from "./styles";

interface Props {
  id: string;
}

const FavoriteBtn: FC<Props> = ({ id }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(AppContext);

  const isFavorite = favorites.includes(id);

  return (
    <S.IcHeart
      className={isFavorite ? "is-active" : ""}
      onClick={(e) => {
        e.stopPropagation();
        isFavorite ? removeFavorite(id) : addFavorite(id);
      }}
    />
  );
};

export default FavoriteBtn;

import React from "react";
import { InputHTMLAttributes } from "react";

import { IcSearch } from "assets/icons";

import * as S from "./styles";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onSearchClick?: () => void;
  simple?: boolean;
}

const SearchBar = ({
  value,
  onReset,
  simple,
  onClick,
  placeholder,
  onSearchClick,
  ...rest
}: Props) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.Input
        placeholder={placeholder || "Search community pantry"}
        {...rest}
      />
      <S.SearchBtn onClick={onSearchClick}>
        <IcSearch />
      </S.SearchBtn>
    </S.Wrapper>
  );
};

export default SearchBar;

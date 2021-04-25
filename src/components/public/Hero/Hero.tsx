import React, { FC } from "react";

import { GOOGLE_SHEET_FILE } from "utils/constants";
import { ShWave } from "assets/shapes";
import SuggestionsSearch from "containers/SuggestionsSearch";

import * as S from "./styles";

const Hero: FC = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.StyledContainer>
          <S.Form>
            <h1>Looking for a community pantry near you to get involved in?</h1>
            <small>
              Data is live from{" "}
              <a target="_blank" href={GOOGLE_SHEET_FILE}>
                Google Sheets
              </a>
              .
            </small>
            <SuggestionsSearch />
          </S.Form>
        </S.StyledContainer>
        <ShWave className="wave" />
      </S.Content>
      <S.BackgroundVideo loop autoPlay muted src="/videos/bayanihan.mp4" />
    </S.Wrapper>
  );
};

export default Hero;

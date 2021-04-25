import React, { FC } from "react";

import { GOOGLE_SHEET_FILE, BASE_URL } from "utils/constants";
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
            <SuggestionsSearch />
            <p>
              Data is live from{" "}
              <a target="_blank" href={GOOGLE_SHEET_FILE}>
                <img src={`${BASE_URL}/images/google-sheet.svg`} />
              </a>
              .
            </p>
          </S.Form>
        </S.StyledContainer>
        <ShWave className="wave" />
      </S.Content>
      <S.BackgroundVideo
        loop
        autoPlay
        muted
        src={`${BASE_URL}/videos/bayanihan.mp4`}
      />
    </S.Wrapper>
  );
};

export default Hero;

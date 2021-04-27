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
      <S.BackgroundVideo loop autoPlay muted>
        <source
          src={`${BASE_URL}/videos/bayanihan.mp4`}
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
        <img
          src={`${BASE_URL}/images/video-cover-fallback.jpg`}
          title="Your browser does not support the <video> tag"
        ></img>
      </S.BackgroundVideo>
    </S.Wrapper>
  );
};

export default Hero;

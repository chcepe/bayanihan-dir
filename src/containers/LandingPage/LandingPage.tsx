import React, { FC } from "react";

import Hero from "components/public/Hero";
import Header from "components/shared/Header";
import Container from "components/shared/Container";
import PantryList from "containers/PantryList";
import AboutSection from "containers/AboutSection";

import * as S from "./styles";

const LandingPage: FC = () => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <Hero />
        <Container>
          <AboutSection />
          <PantryList />
        </Container>
      </S.Wrapper>
    </>
  );
};

export default LandingPage;

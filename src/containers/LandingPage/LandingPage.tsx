import React, { FC } from "react";

import Hero from "components/public/Hero";
import Container from "components/shared/Container";
import PantryList from "containers/PantryList";
import AboutSection from "containers/AboutSection";
import Footer from "components/shared/Footer";

import * as S from "./styles";

const LandingPage: FC = () => {
  return (
    <S.Wrapper>
      <Hero />
      <Container>
        <AboutSection />
        <PantryList />
        <Footer />
      </Container>
    </S.Wrapper>
  );
};

export default LandingPage;

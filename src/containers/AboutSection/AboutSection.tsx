import React, { FC } from "react";

import Section from "components/shared/Section";

import * as S from "./styles";

const AboutSection: FC = () => {
  return (
    <Section>
      <S.Grid>
        <div>
          <h1>"Donate what you can. Take what you need."</h1>
          <p>
            The <strong>community pantry</strong> craze that has spread
            nationwide undoubtedly showcases the Filipino “bayanihan” trait at
            its finest. From condiments to fresh food items to medical supplies,
            the pantries have it all.
          </p>
          <p>
            <strong>Bayanihandir</strong> is a platform to find community
            pantries in different places around the Philippines. Whether you
            want to donate, volunteer to help, find where to get some goods, or
            even create another pantry, we are here to help you!
          </p>
        </div>
        <img src="/images/giving.svg" />
      </S.Grid>
    </Section>
  );
};

export default AboutSection;

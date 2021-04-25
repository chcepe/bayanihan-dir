import React, { FC } from "react";
import { useHistory } from "react-router";

import Section from "components/shared/Section";
import Button from "components/shared/Button";

import * as S from "./styles";

const AboutSection: FC = () => {
  const { push } = useHistory();

  return (
    <Section>
      <S.Grid>
        <div>
          <h1>"Donate what you can. Take what you need."</h1>
          <p>
            The{" "}
            <strong>
              <a
                href="https://international.thenewslens.com/article/149976"
                target="_blank"
              >
                community pantry
              </a>
            </strong>{" "}
            craze that has spread nationwide undoubtedly showcases the Filipino{" "}
            <strong>
              <a
                href="https://www.shopcambio.co/blogs/news/the-bayanihan-spirit-7-filipino-social-enterprises-changing-communities#:~:text=Bayanihan%20(buy%2Duh%2Dnee,to%20achieve%20a%20common%20goal."
                target="_blank"
              >
                “bayanihan”
              </a>
            </strong>{" "}
            trait at its finest. From condiments to fresh food items to medical
            supplies, the pantries have it all.
          </p>
          <p>
            <strong>Bayanihandir</strong> is a platform to find community
            pantries in different places around the Philippines. Whether you
            want to donate, volunteer to help, find where to get some goods, or
            even create another pantry, we are here to help you!
          </p>
          <Button
            onClick={() => push("/map")}
            text="Explore map"
            size="lg"
            icon="AiOutlineAim"
          />
        </div>
        <img src="/images/giving.svg" />
      </S.Grid>
    </Section>
  );
};

export default AboutSection;

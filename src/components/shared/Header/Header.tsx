import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router";

import Button from "components/shared/Button";

import * as S from "./styles";
import { NAVIGATION_LINKS } from "./constants";

const Header: FC = () => {
  const { push } = useHistory();
  const [scrollTop, setScrollTop] = useState(0);
  const withBG = scrollTop > 70;

  useEffect(() => {
    const onScroll = () => {
      setScrollTop(window.pageYOffset);
    };

    const watchScroll = () => window.addEventListener("scroll", onScroll);
    watchScroll();
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <S.Wrapper withBG={withBG}>
      <S.StyledContainer>
        <S.Logo
          src={`/images/logo${!withBG ? "-simple" : ""}.svg`}
          onClick={() => push("/")}
        />
        <S.Navigation>
          <S.Links>
            {NAVIGATION_LINKS.map(({ route, name }) => (
              <a key={route} onClick={() => push(route)}>
                {name}
              </a>
            ))}
          </S.Links>
          <Button
            color="white"
            cta="bordered"
            icon="AiFillHeart"
            text="Add community pantry"
          />
        </S.Navigation>
      </S.StyledContainer>
    </S.Wrapper>
  );
};

export default Header;

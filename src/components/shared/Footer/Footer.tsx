import React, { FC } from "react";

import * as S from "./styles";

const Footer: FC = () => {
  return (
    <S.Wrapper>
      <p>
        Want to help on updating google form data? Shoot me an email at{" "}
        <a href="mailto:chcepe@gmail.com">chcepe@gmail.com</a>
      </p>
      <span>
        Made in 🇨🇿 with ❤️ by{" "}
        <a href="https://chcepe.github.io" target="_blank">
          chcepe
        </a>
      </span>
      <p>
        <a href="https://github.com/chcepe/bayanihan-dir" target="_blank">
          source code
        </a>
      </p>
    </S.Wrapper>
  );
};

export default Footer;

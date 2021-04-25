import React, { FC } from "react";

import CONTRIBUTORS from "utils/contributors";
import Button from "components/shared/Button";

import * as S from "./styles";

const Footer: FC = () => {
  return (
    <S.Wrapper>
      <S.SocialButtons>
        <a
          target="_blank"
          href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchcepe.github.io%2Fbayanihan-dir%2F"
        >
          <Button icon="AiFillFacebook" color="fb" text="Share on Facebook" />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/intent/tweet/?text=Bayanihandir%20is%20a%20platform%20to%20find%20community%20pantries%20in%20different%20places%20around%20the%20Philippines.&amp;url=https%3A%2F%2Fchcepe.github.io%2Fbayanihan-dir%2F"
        >
          <Button
            color="tw"
            icon="AiFillTwitterSquare"
            text="Share on Twitter"
          />
        </a>
      </S.SocialButtons>

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
      <S.Contributors>
        Thanks to{" "}
        {CONTRIBUTORS.map(({ name, link }, i) => (
          <span key={`contributor-${i}`}>
            <a {...(link ? { href: link, target: "_blank" } : {})}>{name}</a>
            {i !== CONTRIBUTORS.length - 1 && ", "}
          </span>
        ))}
      </S.Contributors>
      <p>
        <a href="https://github.com/chcepe/bayanihan-dir" target="_blank">
          source code
        </a>
      </p>
    </S.Wrapper>
  );
};

export default Footer;

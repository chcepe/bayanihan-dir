import * as Icon from "react-icons/ai";

import { parseColor } from "theme";

import * as T from "./types";
import * as S from "./styles";

const Button = ({
  icon,
  text,
  color = "primary",
  loadingColor = "primary",
  cta = "primary",
  size = "normal",
  textAlign = "center",
  iconPos = "left",
  loading,
  disabled,
  type = "button",
  ...rest
}: T.Props) => {
  const loadingColorFill = parseColor(loadingColor);

  const BtnIcon = (
    <>
      {Boolean(icon?.length) &&
        (() => {
          const fields = [icon];
          const { [fields[0] as keyof typeof Icon]: IconComp } = Icon;
          return <IconComp />;
        })()}
    </>
  );

  return (
    <S.StyledButton
      iconPos={iconPos}
      textAlign={textAlign}
      cta={cta}
      size={size}
      loading={loading}
      disabled={loading || disabled}
      type={type}
      color={color}
      {...rest}
    >
      {iconPos === "left" ? BtnIcon : ""}
      {text}
      {iconPos === "right" ? BtnIcon : ""}

      {loading && (
        <S.Loading color={color} cta={cta}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="256px"
            height="64px"
            viewBox="0 0 128 32"
          >
            <circle
              fill={loadingColorFill}
              cx="0"
              cy="0"
              r="11"
              transform="translate(16 16)"
            >
              <animateTransform
                attributeName="transform"
                type="scale"
                additive="sum"
                values="1;1.42;1;1;1;1;1;1;1;1"
                dur="750ms"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
            <circle
              fill={loadingColorFill}
              cx="0"
              cy="0"
              r="11"
              transform="translate(64 16)"
            >
              <animateTransform
                attributeName="transform"
                type="scale"
                additive="sum"
                values="1;1;1;1;1.42;1;1;1;1;1"
                dur="750ms"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
            <circle
              fill={loadingColorFill}
              cx="0"
              cy="0"
              r="11"
              transform="translate(112 16)"
            >
              <animateTransform
                attributeName="transform"
                type="scale"
                additive="sum"
                values="1;1;1;1;1;1;1;1.42;1;1"
                dur="750ms"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
          </svg>
        </S.Loading>
      )}
    </S.StyledButton>
  );
};

export default Button;

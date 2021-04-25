import { SVGProps } from "react";

import { THEME_TYPES, color as colorTheme } from "theme";

type Props = SVGProps<SVGSVGElement> & {
  color?: THEME_TYPES["COLORS"];
};

const Loading = ({ color, ...rest }: Props) => {
  const loadingColorFill = color || colorTheme.primary;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="256px"
      height="64px"
      viewBox="0 0 128 32"
      {...rest}
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
  );
};

export default Loading;

import { ButtonHTMLAttributes } from "react";
import { THEME_TYPES } from "theme";

import * as Icon from "react-icons/ai";

type Icon = keyof typeof Icon;
export type CTA = "primary" | "ghost" | "bordered";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  cta?: CTA;
  block?: boolean;
  textAlign?: "left" | "right" | "center";
  size?: "normal" | "sm" | "md" | "lg";
  icon?: Icon;
  iconPos?: "left" | "right";
  uppercase?: boolean;
  loading?: boolean;
  center?: boolean;
  color?: THEME_TYPES["COLORS"];
  textColor?: THEME_TYPES["COLORS"];
  loadingColor?: THEME_TYPES["COLORS"];

  marginB?: THEME_TYPES["MARGINS"];
  marginT?: THEME_TYPES["MARGINS"];
  marginR?: THEME_TYPES["MARGINS"];
  marginL?: THEME_TYPES["MARGINS"];
}

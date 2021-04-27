const fontSize = {
  sm: "10px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  h1: "36px",
  h2: "30px",
  h3: "24px",
};

const breakpoint = {
  mobile_xs: "@media (max-device-width: 540px)",
  mobile: "@media only screen and (max-width: 768px)",
  desktop: "@media only screen and (min-width: 768px)",
};

const padding = {
  sm: "5px",
  md: "12px",
  lg: "18px",
  xl: "35px",
  xxl: "55px",
};

const margin = {
  sm: "2px",
  md: "5px",
  lg: "12px",
  xl: "20px",
  xxl: "35px",
};

const color = {
  primary: "#2E3434",
  transparent: "rgba(0,0,0,0)",
  white: "#ffffff",
  black: "#000000",
  dark: "#212121",
  dark10: "#474747",
  dark20: "#3b3b3b",
  dark30: "#2e2e2e",
  grey91: "#e8e8e8",
  link: "#2a9df4",
  fb: "#3b5998",
  tw: "#00acee",
};

export interface THEME_TYPES {
  FONT_SIZES: keyof typeof fontSize | number;
  COLORS: keyof typeof color;
  MARGINS: keyof typeof margin | number;
  PADDINGS: keyof typeof padding | number;
}

const parseFontSize = (value: THEME_TYPES["FONT_SIZES"]) => {
  return typeof value === "number" ? `${value}px` : fontSize[value];
};

const parseMargin = (value: THEME_TYPES["MARGINS"]) => {
  return typeof value === "number" ? `${value}px` : margin[value];
};

const parsePadding = (value: THEME_TYPES["PADDINGS"]) => {
  return typeof value === "number" ? `${value}px` : padding[value];
};

const parseColor = (value: THEME_TYPES["COLORS"]) => {
  return color[value];
};

export {
  fontSize,
  breakpoint,
  padding,
  margin,
  color,
  parseFontSize,
  parseMargin,
  parsePadding,
  parseColor,
};

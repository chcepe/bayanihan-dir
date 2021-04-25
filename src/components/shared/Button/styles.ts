import { color, padding, parseMargin, parseColor, THEME_TYPES } from "theme";
import styled from "styled-components";

import { Props, CTA } from "./types";
import { darken, lighten, rgba, transparentize } from "polished";

export const Wrapper = styled.div``;

export const StyledButton = styled.button<Omit<Props, "text" | "icon">>(
  ({
    textAlign,
    block,
    color: customColor,
    textColor,
    cta,
    size,
    marginB = 0,
    marginT = 0,
    marginL = 0,
    marginR = 0,
    iconPos,
    uppercase = false,
    loading,
    disabled,
    center,
  }) => {
    const btnColor = customColor ? parseColor(customColor) : color.primary;
    return `
  cursor: pointer;
  position: relative;
  ${block ? `display: block; width: 100%;` : "width: fit-content;"};
  border-radius: 5px;
  font-weight: bold;
  display: flex;
  align-items: center;
  border: 0;
  overflow: hidden;
  transition: all 0.2s ease;
  
  svg {
    width: 20px;
    height: 20px;
    margin-${iconPos === "left" ? "right" : "left"}: 10px;
  }
  
  margin-bottom: ${parseMargin(marginB)};
  margin-top: ${parseMargin(marginT)};
  margin-left: ${center ? "auto" : parseMargin(marginL)};
  margin-right: ${center ? "auto" : parseMargin(marginR)};

  transition: all 0.1s ease-in;


  ${
    uppercase
      ? `
         text-transform: uppercase;
         letter-spacing: 2px;
  `
      : ""
  }

  ${
    textAlign === "center"
      ? `
          justify-content: center;
  `
      : ""
  }


  ${
    textAlign === "left"
      ? `
          justify-content: flex-start;
  `
      : ""
  }


  ${
    textAlign === "right"
      ? `
          justify-content: flex-end;
  `
      : ""
  }

  ${
    size === "sm"
      ? `
          height: 25px;
          font-size: 10px;
          padding: ${padding.lg};
        `
      : ""
  }
  ${
    size === "normal"
      ? `
          height: 35px;
          font-size: 14px;
          padding: 0 ${padding.lg};
        `
      : ""
  }
  ${
    size === "md"
      ? `
          height: 40px;
          font-size: 15px;
          padding: 0 ${padding.lg};
        `
      : ""
  }
  ${
    size === "lg"
      ? `
          height: 50px;
          padding: 0 ${padding.xl};
        `
      : ""
  }

  ${
    cta === "primary"
      ? `
          background: ${disabled ? lighten(0.2, btnColor) : btnColor};
          color: ${textColor || color.white};

          ${
            !loading
              ? `
            &:hover{
              background: ${darken(0.1, btnColor)};
            }
            &:active{
              background: ${darken(0.15, btnColor)};
            }
          `
              : ""
          }
        `
      : ""
  }

  ${
    cta === "ghost"
      ? `
          background: ${color.white};
          color: ${textColor || btnColor};
        `
      : ""
  }

   ${
     cta === "bordered"
       ? `
          background: ${disabled ? rgba(0, 0, 0, 0.005) : rgba(0, 0, 0, 0)}; 
          -webkit-box-shadow:inset 0px 0px 0px 2px ${
            disabled ? lighten(0.4, btnColor) : btnColor
          };
          -moz-box-shadow:inset 0px 0px 0px 2px ${
            disabled ? lighten(0.4, btnColor) : btnColor
          };
          box-shadow:inset 0px 0px 0px 2px ${
            disabled ? lighten(0.4, btnColor) : btnColor
          };
          color: ${disabled ? lighten(0.4, btnColor) : btnColor};

          ${
            !loading
              ? `
            &:hover {
              background: ${rgba(btnColor, 0.1)};
              -webkit-box-shadow:inset 0px 0px 0px 2px ${darken(0.1, btnColor)};
              -moz-box-shadow:inset 0px 0px 0px 2px ${darken(0.1, btnColor)};
              box-shadow:inset 0px 0px 0px 2px ${darken(0.1, btnColor)};
            }
            &:active {
              background: ${rgba(btnColor, 0.15)};
              -webkit-box-shadow:inset 0px 0px 0px 2px ${darken(
                0.15,
                btnColor
              )};
              -moz-box-shadow:inset 0px 0px 0px 2px ${darken(0.15, btnColor)};
              box-shadow:inset 0px 0px 0px 2px ${darken(0.15, btnColor)};
            }
          `
              : ""
          }
        `
       : ""
   }
`;
  }
);

export const Loading = styled.div<{ cta: CTA; color?: THEME_TYPES["COLORS"] }>(
  ({ cta, color: customColor }) => {
    const btnColor = customColor ? parseColor(customColor) : color.primary;
    return `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1.01);

  svg{
    margin: 0;
  }


  ${
    cta === "bordered"
      ? `
      background: rgba(255,255,255,0.8);
      .loading{
        background-color: ${btnColor};
      }
  `
      : ""
  }

    ${
      cta === "primary"
        ? `
      background: ${transparentize(0.4, darken(0.3, btnColor))};
      .loading{
        background-color: ${color.white};
      }
  `
        : ""
    }

    ${
      cta === "ghost"
        ? `
      background: rgba(255, 255, 255,0.8);
      .loading{
        background-color: ${btnColor};
      }
  `
        : ""
    }
`;
  }
);

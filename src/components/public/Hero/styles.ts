import { darken, rgba } from "polished";
import styled from "styled-components";
import { breakpoint, color } from "theme";

import Container from "components/shared/Container";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;

  .wave {
    fill: #f4f5f7;
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background: ${rgba(darken(0.5, color.primary), 0.5)};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 60;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;

  a,
  h1,
  small {
    color: ${color.white};
  }

  ${breakpoint.mobile} {
    h1 {
      font-size: 22px;
    }
    .logo {
      margin-left: 10px;
      height: 30px;
    }
  }
`;

export const BackgroundVideo = styled.video`
  width: 100% !important;
  height: 100% !important;
  position: absolute;
  border: 0;
  z-index: 20;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  object-fit: cover;
`;

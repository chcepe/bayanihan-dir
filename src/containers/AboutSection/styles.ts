import { breakpoint } from "theme";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  img {
    height: 400px;
  }

  ${breakpoint.mobile} {
    grid-template-columns: 1fr;

    img {
      width: 80%;
      margin: auto;
      display: block;
    }

    & > div {
      order: 2;
    }
  }
`;

import styled from "styled-components";
import { color, padding } from "theme";

export const Wrapper = styled.div``;

export const Info = styled.div`
  background: ${color.white};
  width: 100%;
  padding: ${padding.xl};
  border-radius: 10px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);
  width: 100%;
  margin-bottom: 100px;
`;

export const PantryContainer = styled.div`
  width: 100%;
  margin-top: -30px;
  position: absolute;
  top: 50vh;
  z-index: 999;
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  padding-bottom: ${padding.lg};
  align-items: flex-start;

  svg {
    width: 20px;
    height: 20px;
  }
`;

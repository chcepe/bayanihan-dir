import styled from "styled-components";
import { color, margin, padding } from "theme";

export const Info = styled.div`
  background: ${color.white};
  width: 100%;
  padding: ${padding.xxl} ${padding.xl};
  border-radius: 10px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);
  width: 100%;
  margin-bottom: ${margin.lg};

  h1 {
    line-height: 28px;
    margin-bottom: ${margin.xxl};
  }
`;

export const PantryContainer = styled.div`
  width: 100%;
  margin-top: -30px;
  position: absolute;
  top: 50vh;
  z-index: 999;
`;

export const Action = styled.div`
  background: ${color.primary};
  margin-top: -25px;
  position: absolute;
  top: 0;
  right: 50px;
  z-index: 999;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  div {
    transform: scale(0.6);
    position: absolute;
  }
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

export const Comments = styled.div`
  width: 100%;
  margin-top: ${margin.lg};
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: ${padding.md} 0;

  * {
    width: 100% !important;
  }
`;

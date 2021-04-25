import styled from "styled-components";
import { color } from "theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background: ${color.white};
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 50px;
`;

export const Input = styled.input`
  border: 0;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

export const SearchBtn = styled.div(
  ({ onClick }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${
    onClick
      ? `
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }`
      : ""
  }

  svg {
    width: 20px;
    height: 20px;
  }
`
);

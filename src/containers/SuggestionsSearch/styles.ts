import styled from "styled-components";
import { color, margin, padding } from "theme";

export const Wrapper = styled.div`
  position: relative;
  margin-top: ${margin.lg};
`;

export const Suggestions = styled.div`
  background: ${color.white};
  position: absolute;
  top: 55px;
  left: 0;
  width: 100%;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);
  overflow: auto;
  max-height: 200px;
`;

export const RecentSearches = styled.div`
  padding: ${padding.lg};
  flex-direction: column;

  &,
  div {
    display: flex;
  }
`;

export const SuggestionItem = styled.div`
  padding: ${padding.md} ${padding.lg};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

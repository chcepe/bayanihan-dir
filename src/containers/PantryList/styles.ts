import styled from "styled-components";
import Loading from "components/shared/Loading";

import { breakpoint, color, margin, padding } from "theme";
import { rgba } from "polished";

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${margin.xl};

  ${breakpoint.mobile} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Header = styled.div`
  margin: ${margin.lg} 0;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${padding.lg} 0;
`;

export const StyledLoading = styled(Loading)`
  width: 100px;
  margin: auto;
  display: block;
`;

export const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: ${margin.lg};
`;

export const FilterItem = styled.div<{ active?: boolean }>(
  ({ active }) => `
  width: 100%;
  padding: ${padding.md};
  text-align: center;
  border-bottom: ${rgba(color.primary, active ? 1 : 0.1)} 3px solid;
  cursor: pointer;

  &:hover{
    background: ${rgba(color.primary, 0.05)};
  }
`
);

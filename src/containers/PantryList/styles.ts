import styled from "styled-components";
import Loading from "components/shared/Loading";

import { breakpoint, margin, padding } from "theme";

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

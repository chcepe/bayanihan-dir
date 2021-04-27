import { rgba } from "polished";
import styled from "styled-components";
import { breakpoint, color } from "theme";

import Container from "components/shared/Container";

export const Wrapper = styled.div<{ withBG?: boolean }>(
  ({ withBG }) => `
  transition: all 0.2s ease;
  background: ${withBG ? rgba(color.primary, 0.9) : "none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 9999;
  display: flex;
  align-items: center;
`
);

export const Logo = styled.img`
  cursor: pointer;
  height: 25px;
  color: ${color.white};
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const Links = styled.div`
  a {
    color: ${color.white};
    margin-right: 40px;
  }

  ${breakpoint.mobile} {
    display: none;
  }
`;

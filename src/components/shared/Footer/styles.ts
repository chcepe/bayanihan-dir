import styled from "styled-components";
import { breakpoint, margin, padding } from "theme";

export const Wrapper = styled.div`
  padding: 50px 0;
  text-align: center;
  font-size: 12px;

  p {
    padding: ${padding.md} 0;
  }

  & > span {
    font-size: 14px;
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${breakpoint.mobile} {
    flex-direction: column;
  }

  a {
    margin: 2px;
  }
`;

export const Contributors = styled.div`
  padding: ${padding.xl} 0;
  margin: ${margin.xl} 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 12px;
`;

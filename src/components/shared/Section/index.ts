import styled from "styled-components";

import { breakpoint, padding } from "theme";

const Section = styled.section`
  width: 100%;
  padding: ${padding.xl} 0;

  ${breakpoint.mobile} {
    padding: ${padding.lg} 0;
  }
`;

export default Section;

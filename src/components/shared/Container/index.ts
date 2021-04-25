import styled from "styled-components";

import { breakpoint } from "theme";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;

  ${breakpoint.mobile} {
    padding: 0 20px;
  }
`;

export default Container;

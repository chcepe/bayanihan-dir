import styled from "styled-components";
import { BASE_URL } from "utils/constants";

export const IcHeart = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  background: url("${BASE_URL}/images/heart.png") no-repeat;
  background-position: 0 0;
  cursor: pointer;
  transition: background-position 1s steps(28);
  transition-duration: 0s;

  &.is-active {
    transition-duration: 1s;
    background-position: -2800px 0;
  }
`;

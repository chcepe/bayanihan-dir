import styled from "styled-components";
import { IoHeartSharp, IoLocationSharp } from "react-icons/io5";
import { color, margin, padding } from "theme";
import { rgba } from "polished";

import AspectRatio from "components/shared/AspectRatio";

export const Overlay = styled.div`
  padding: ${padding.md};
  display: flex;
  align-items: flex-end;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );

  span {
    -webkit-line-clamp: 1;
    color: ${color.white};
    font-size: 12px;
  }
`;

export const Hover = styled.div`
  background: linear-gradient(
    165deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  opacity: 0;
  transition: all 0.2s ease;
  padding: ${padding.md};
`;

export const Location = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-gap: ${margin.md};
  align-items: center;
`;

export const IcLocation = styled(IoLocationSharp)`
  color: ${color.white};
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

export const IcHeart = styled(IoHeartSharp)<{ active?: boolean }>(
  ({ active }) => `
  width: 30px;
  height: 30px;
  fill: none;
  stroke-width: 50px;
  stroke: ${color.white};
  transition: all 0.2s ease;
  ${active ? `fill: ${color.white};` : ""}

  &:hover {
    fill: ${rgba(active ? color.black : color.white, 0.6)};
  }
`
);

export const Wrapper = styled.div`
  background: ${color.white};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.2s ease;

  ${Overlay}, ${Hover}, img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  p,
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  &:hover ${Hover} {
    opacity: 1;
  }

  &:hover {
    box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const Img = styled(AspectRatio)`
  position: relative;

  img {
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: ${padding.lg};

  p {
    -webkit-line-clamp: 2;
  }

  span {
    font-weight: bold;
    -webkit-line-clamp: 2;
  }
`;

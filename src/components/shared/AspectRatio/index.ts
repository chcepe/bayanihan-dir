import styled from "styled-components";

const RATIO_PADDING = {
  "1:1": "100%",
  "16:9": "56.25%",
  "9:16": "177.78%",
  "4:3": "75%",
  "3:4": "133.33%",
};

interface Props {
  type: keyof typeof RATIO_PADDING;
}

const AspectRatio = styled.div<Props>(({ type }) => {
  return `
    position: relative;
    &::before {
        content: "";
        width: 1px;
        margin-left: -1px;
        float: left;
        height: 0;
        padding-top: ${RATIO_PADDING[type]};
    }
    &::after { 
        content: "";
        display: table;
        clear: both;
    }`;
});

export default AspectRatio;

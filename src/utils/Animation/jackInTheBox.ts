import {keyframes} from "styled-components";

export const jackInTheBox = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }
  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }
  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;
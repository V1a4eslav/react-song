import {keyframes} from "styled-components";

export const zoomInLeft = keyframes`
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
  }
  100% {
    opacity: 1;
  }
`;
// .animate__zoomInLeft {
//     -webkit-animation-name: zoomInLeft;
//     animation-name: zoomInLeft;
// }
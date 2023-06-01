import {keyframes} from "styled-components";

export const rotateIn = keyframes`
  0% {
    opacity: 0;
    transform: rotate(-200deg);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;
// .animate__rotateIn {
//     -webkit-animation-name: rotateIn;
//     animation-name: rotateIn;
//     -webkit-transform-origin: center;
//     transform-origin: center;
// }
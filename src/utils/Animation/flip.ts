import {keyframes} from "styled-components";

export const flip = keyframes`
  0% {
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    -webkit-transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);
    transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);
    opacity: 0;
  }
  40% {
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    -webkit-transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);
    transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);
    opacity: .4;
  }
  50% {
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    -webkit-transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);
    transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);
    opacity: .5;
  }
  80% {
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translateZ(0) rotateY(0deg);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translateZ(0) rotateY(0deg);
    opacity: .8;
  }
  to {
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    -webkit-transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);
    transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);
    opacity: 1;
  }
`;

// .animate__animated.animate__flip {
//     -webkit-animation-name: flip;
//     animation-name: flip;
//     -webkit-backface-visibility: visible;
//     backface-visibility: visible;
// }
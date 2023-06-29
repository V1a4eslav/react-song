import {ITheme} from "app/theme/themeInterface";
import styled from "styled-components";


export const SViralContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(70px);
  @media(max-width: 991.98px){
    transform: translateY(20px);
  }

`;
export const SViralInner = styled.div`
  max-width: 100%;
  padding-top: 70px;
  padding-bottom: 65px;
  position: relative;

  & > svg {
    width: 100%;
    height: auto;
    max-height: 70vh;

    & text {
      opacity: 0;
      transition: opacity .7s linear 1s;
    }

    &.active text {
      opacity: 1;
    }


    & .svg-elem-1 {
      stroke-dashoffset: 321.4200439453125px;
      stroke-dasharray: 321.4200439453125px;
      -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
      transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
    }

    &.active .svg-elem-1 {
      stroke-dashoffset: 0;
    }

    & .svg-elem-2 {
      stroke-dashoffset: 53.8709716796875px;
      stroke-dasharray: 53.8709716796875px;
      -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
      transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
    }

    &.active .svg-elem-2 {
      stroke-dashoffset: 0;
    }

    & .svg-elem-3 {
      stroke-dashoffset: 102.3099365234375px;
      stroke-dasharray: 102.3099365234375px;
      -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
      transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
    }

    &.active .svg-elem-3 {
      stroke-dashoffset: 0;
    }

    & .svg-elem-4 {
      stroke-dashoffset: 263.0400390625px;
      stroke-dasharray: 263.0400390625px;
      -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s;
      transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s;
    }

    &.active .svg-elem-4 {
      stroke-dashoffset: 0;
    }

    & .svg-elem-5 {
      stroke-dashoffset: 155.72999572753906px;
      stroke-dasharray: 155.72999572753906px;
      -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s;
      transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s;
    }

    &.active .svg-elem-5 {
      stroke-dashoffset: 0;
    }

    & .svg-elem-6 {
      stroke-dashoffset: 317.8800048828125px;
      stroke-dasharray: 317.8800048828125px;
      fill: transparent;
      -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s;
      transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s;
    }

    &.active .svg-elem-6 {
      stroke-dashoffset: 0;
      fill: rgb(85, 40, 125);
    }

    & .svg-elem-7 {
      stroke-dashoffset: 341.29803466796875px;
      stroke-dasharray: 341.29803466796875px;
      -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s;
      transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s;
    }

    &.active .svg-elem-7 {
      stroke-dashoffset: 0;
    }

    & .svg-elem-8 {
      stroke-dashoffset: 71.3813247680664px;
      stroke-dasharray: 71.3813247680664px;
      fill: transparent;
      -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s;
      transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s;
    }

    &.active .svg-elem-8 {
      stroke-dashoffset: 0;
      fill: rgb(205, 34, 136);
    }
  }

  @media(max-width: 991.98px){
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const SViralTitle = styled.h2`
  font-size: 60px;
  font-weight: 700;
  line-height: 123.7%;
  font-family: 'Lato', sans-serif;
  color: ${({theme}: ITheme) => theme.colors.violet};
  max-width: 466px;
  transform: scale(0);
  transition: transform 1s linear 1s;
  &.active{
    transform: scale(1);
  }
  @media(max-width: 991.98px){
    font-size: 30px;
  }
  @media(max-width: 767.98px){
    max-width: 320px;
  }
  @media(max-width: 479.98px){
    font-size: 20px;
  }
`;

export const SViralText = styled.span`
  text-transform: uppercase;
  position: relative;
  margin-left: 8px;
  padding-right: 40px;
  @media(max-width: 479.98px){
    padding-right: 30px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    display: inline-block;
    width: 300px;
    height: 8px;
    background: linear-gradient(90deg, #55287d 0%, #cd2288 100%);
    @media(max-width: 991.98px){
      width: 110px;
      height: 5px;
    }
  }
  
  svg{
    position: absolute;
    right: 0;
    bottom: 0;
    @media(max-width: 479.98px){
      width: 20px;
      height: auto;
    }
  }
`;

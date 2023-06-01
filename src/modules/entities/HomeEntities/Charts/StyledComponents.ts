import styled, {keyframes} from "styled-components";
import {ITheme} from "../../../../app/theme/themeInterface";
import BgCharts from 'assets/images/Home/Charts/bg.png';
import {rubberBand,fadeInLeftBig,tada} from 'react-animations';
import {MainButton} from "../../../UIKit/Buttons/MainButton/MainButton";

const RubberBand = keyframes`${rubberBand}`;
const FadeInLeftBig = keyframes`${fadeInLeftBig}`;
const Tada = keyframes`${tada}`;

export const SCharts = styled.section`
  height: 100vh;
  padding-top: 100px;
  scroll-snap-align: center;
  @media (max-width: 1440px) {
    padding-top: 80px;
  }
  @media (max-width: 768px) {
    height: 100%;
    padding-top: 0;
  }
`;

export const SChartsContent = styled.div`
  position: relative;
  height: 100%;
  padding: 50px 0;
  background-color: ${({theme}: ITheme) => theme.colors.violet};

  &:before {
    content: '';
    position: absolute;
    display: inline-block;
    right: 0;
    bottom: 0;
    top: 0;
    width: 50%;
    background-image: url(${BgCharts});
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (max-width: 1440px) {
    &:before {
      background-position: center bottom;
    }
  }
  @media (max-width: 768px) {
    &:before {
      display: none;
    }
  }
`;

export const SWrapperChartsSvg = styled.div`
  position: absolute;
  bottom: 0;
  right: 50%;
  max-width: 50%;
  pointer-events: none;

  & svg {
    max-width: 100%;
    height: 100%;
  }

  svg .svg-elem-1 {
    stroke-dashoffset: 1383.212890625px;
    stroke-dasharray: 1383.212890625px;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
  }

  svg .svg-elem-2 {
    stroke-dashoffset: 170.3889923095703px;
    stroke-dasharray: 170.3889923095703px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
  }

  svg .svg-elem-3 {
    stroke-dashoffset: 215.42481994628906px;
    stroke-dasharray: 215.42481994628906px;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
  }

  svg .svg-elem-4 {
    stroke-dashoffset: 118px;
    stroke-dasharray: 118px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s;
  }

  svg .svg-elem-5 {
    stroke-dashoffset: 264px;
    stroke-dasharray: 264px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s;
  }

  svg .svg-elem-6 {
    stroke-dashoffset: 316px;
    stroke-dasharray: 316px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s;
  }

  svg .svg-elem-7 {
    stroke-dashoffset: 704px;
    stroke-dasharray: 704px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s;
  }

  svg .svg-elem-8 {
    stroke-dashoffset: 712px;
    stroke-dasharray: 712px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s;
  }

  svg .svg-elem-9 {
    stroke-dashoffset: 83.68140899333463px;
    stroke-dasharray: 83.68140899333463px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s;
  }

  svg .svg-elem-10 {
    stroke-dashoffset: 39.69911184307752px;
    stroke-dasharray: 39.69911184307752px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s;
  }

  svg .svg-elem-11 {
    stroke-dashoffset: 83.68140899333463px;
    stroke-dasharray: 83.68140899333463px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s;
  }

  svg .svg-elem-12 {
    stroke-dashoffset: 39.69911184307752px;
    stroke-dasharray: 39.69911184307752px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3199999999999998s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s;
  }

  svg .svg-elem-13 {
    stroke-dashoffset: 83.68140899333463px;
    stroke-dasharray: 83.68140899333463px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.44s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s;
  }

  svg .svg-elem-14 {
    stroke-dashoffset: 39.69911184307752px;
    stroke-dasharray: 39.69911184307752px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.56s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s;
  }

  svg .svg-elem-15 {
    stroke-dashoffset: 83.68140899333463px;
    stroke-dasharray: 83.68140899333463px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.68s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.2s;
  }

  svg .svg-elem-16 {
    stroke-dashoffset: 39.69911184307752px;
    stroke-dasharray: 39.69911184307752px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7999999999999998s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.3s;
  }

  svg .svg-elem-17 {
    stroke-dashoffset: 83.68140899333463px;
    stroke-dasharray: 83.68140899333463px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.92s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4000000000000004s;
  }

  svg .svg-elem-18 {
    stroke-dashoffset: 39.69911184307752px;
    stroke-dasharray: 39.69911184307752px;
    fill: transparent;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.04s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.5s;
  }

  ${SChartsContent}.active & {
    svg .svg-elem-1 {
      stroke-dashoffset: 0;
    }

    svg .svg-elem-2 {
      stroke-dashoffset: 0;
      fill: rgb(199, 21, 178);
    }

    svg .svg-elem-3 {
      stroke-dashoffset: 0;
    }

    svg .svg-elem-4 {
      stroke-dashoffset: 0;
      fill: rgb(103, 114, 192);
    }

    svg .svg-elem-5 {
      stroke-dashoffset: 0;
      fill: rgb(60, 156, 198);
    }

    svg .svg-elem-6 {
      stroke-dashoffset: 0;
      fill: rgb(130, 88, 188);
    }

    svg .svg-elem-7 {
      stroke-dashoffset: 0;
      fill: rgb(153, 66, 185);
    }

    svg .svg-elem-8 {
      stroke-dashoffset: 0;
      fill: rgb(179, 41, 181);
    }

    svg .svg-elem-9 {
      stroke-dashoffset: 0;
      fill: rgb(255, 255, 255);
    }

    svg .svg-elem-10 {
      stroke-dashoffset: 0;
      fill: rgb(60, 155, 198);
    }

    svg .svg-elem-11 {
      stroke-dashoffset: 0;
      fill: rgb(255, 255, 255);
    }

    svg .svg-elem-12 {
      stroke-dashoffset: 0;
      fill: rgb(104, 118, 218);
    }

    svg .svg-elem-13 {
      stroke-dashoffset: 0;
      fill: rgb(255, 255, 255);
    }

    svg .svg-elem-14 {
      stroke-dashoffset: 0;
      fill: rgb(132, 86, 188);
    }

    svg .svg-elem-15 {
      stroke-dashoffset: 0;
      fill: rgb(255, 255, 255);
    }

    svg .svg-elem-16 {
      stroke-dashoffset: 0;
      fill: rgb(153, 66, 185);
    }

    svg .svg-elem-17 {
      stroke-dashoffset: 0;
      fill: rgb(255, 255, 255);
    }

    svg .svg-elem-18 {
      stroke-dashoffset: 0;
      fill: rgb(179, 41, 181);
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    right: 0;
    & svg {
      display: none;
    }
  }
`;

export const SChartsInner = styled.div`
  max-width: 50%;
  padding-right: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-right: 0;
  }
`;

export const SPresentationTitle = styled.h2`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 60px;
  color: #fff;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 0;
  transition: opacity .3s linear .5s;

  &::after {
    content: "";
    display: block;
    width: 70%;
    height: 8px;
    background: linear-gradient(90deg, #00fbeb 0%, #ff04c8 100%);
    margin: 27px 0;
    transform: scale(0);
    transition: transform .3s linear 1.5s;
  }

  ${SChartsContent}.active & {
    opacity: 1;
    animation: 1.5s ${RubberBand} .5s;
    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }


  @media (max-width: 1440px) {
    font-size: 50px;
  }
  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

export const SPresentationText = styled.p`
  font-size: 24px;
  line-height: 147%;
  letter-spacing: -0.005em;
  color: #ffffff;
  max-width: 70%;
  margin-bottom: 44px;
  opacity: 0;
  transition: opacity .3s linear 1.7s;

  ${SChartsContent}.active & {
    opacity: 1;
    animation: 1s ${FadeInLeftBig} 1.7s;
  }
  @media (max-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const SMainButton = styled(MainButton)`
  opacity: 0;
  transition: opacity .3s linear 2.5s, transform .3s linear;
  ${SChartsContent}.active &{
    opacity: 1;
    animation: 1s ${Tada} 2.5s;
  }
`;
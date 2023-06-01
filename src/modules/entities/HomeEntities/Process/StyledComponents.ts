import styled from "styled-components";
import {ITheme} from "../../../../app/theme/themeInterface";
import line400 from 'assets/images/Home/Process/SVGLine400.svg';
import line700 from 'assets/images/Home/Process/SVGLine700.svg';
import underSvg from 'assets/images/Home/Process/underSvg.svg';
import {jackInTheBox} from "../../../../utils/Animation/jackInTheBox";
import {flip} from "../../../../utils/Animation/flip";

export const SProcessItem = styled.span`
  position: relative;
  font-size: 40px;
  line-height: 123.7%;
  color: ${({theme}: ITheme) => theme.colors.violet};
  font-family: Lato, sans-serif;
  @media (max-width: 1440px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const SProcessItemWrapper = styled.div`
  position: relative;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation-fill-mode: both;
  transform-origin: left center;
  transition: .3s all linear, 1s opacity linear;
  @media (max-width: 768px) {
    padding: 0 10px;
  }

  &::before {
    content: url(${line400});
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 15px);
    width: 98px;
    max-width: 100%;
    @media (max-width: 768px) {
      width: 70px;
    }
  }

  &:last-child {
    &::before {
      content: url(${line700});
      display: inline-block;
    }

    &:after {
      content: url(${underSvg});
      display: inline-block;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -30px);
      height: auto;
      width: 100%;
      max-width: 100%;
      @media(max-width: 768px){
        transform: translate(-50%, -15px); 
      }
    }

    ${SProcessItem} {
      font-weight: 700;
    }
  }

  svg {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    top: 90px;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 1440px) {
      height: 60px;
      top: 60px;
    }
    @media (max-width: 768px) {
      height: 30px;
      top: 40px;
    }
  }
`;

export const SProcessSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 89px 20px 225px;
  svg.arrow{
    opacity: 0;
    backface-visibility: visible;
    animation-fill-mode: both;
    transition: 0.3s all linear;
  }

  &.active {
    ${SProcessItemWrapper}.create-wrapper {
      animation-name: ${jackInTheBox};
      animation-duration: 1s;
      animation-delay: 0s;
    }

    ${SProcessItemWrapper}.submit-wrapper {
      animation-name: ${jackInTheBox};
      animation-duration: 1s;
      animation-delay: .9s;
    }

    ${SProcessItemWrapper}.review-wrapper{
      animation-name: ${jackInTheBox};
      animation-duration: 1s;
      animation-delay: 1.8s;
    }

    ${SProcessItemWrapper}.sign-wrapper {
      animation-name: ${jackInTheBox};
      animation-duration: 1s;
      animation-delay: 2.7s;
    }

   svg.arrow1 {
     animation-name: ${flip};
     animation-duration: .7s;
     animation-delay: .3s;
    }
    svg.arrow2 {
      animation-name: ${flip};
      animation-duration: .7s;
      animation-delay: 1.2s;
    }
    svg.arrow3 {
      animation-name: ${flip};
      animation-duration: .7s;
      animation-delay: 2.1s;
    }
  }

  @media (max-width: 1440px) {
    padding: 50px 0 100px;
  }
  @media (max-width: 768px) {
    padding: 35px 0 70px;
    svg {
      max-width: 50px;
    }
  }
`;
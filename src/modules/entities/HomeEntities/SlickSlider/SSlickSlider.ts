import styled from "styled-components";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BeeberImg from "assets/images/Home/Beeber.jpg";
import Slider from "react-slick";

export const SSlickWrapper = styled.div`
  background-image: url(${BeeberImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  height: calc(100vh - 100px);
  @media (max-width: 1440px) {
    height: calc(100vh - 80px);
  }
`

export const SSlickSlider = styled(Slider)`
  padding: 20px 0;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1440px) {
    height: calc(100vh - 80px);
  }
`;

export const SSlideContainer = styled.div`
  padding: 0 10px;
  max-width: 800px;
`

export const SSlideGenre = styled.div`
  text-transform: uppercase;
  font-size: 25px;
  opacity: .7;
  font-weight: 700;
  margin-bottom: 30px;
  @media (min-width: 1920px) {
    margin-bottom: 50px;
    font-size: 30px;
  }
  @media (max-width: 991.98px) {
    margin-bottom: 20px;
    font-size: 20px;
  }
`;

export const SSlideArtistName = styled.div`
  font-weight: 700;
  max-width: 600px;
  font-size: 105px;
  margin-bottom: 20px;
  @media (min-width: 1920px) {
    font-size: 105px;
  }
  @media (max-width: 1920px) {
    font-size: 80px;
  }
  @media (max-width: 1440px) {
    font-size: 60px;
  }
  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 767.98px) {
    font-size: 30px;
  }
`;

export const SSlideTypeSong = styled.div`
  font-weight: 200;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  @media (min-width: 1920px) {
    font-size: 53px;
    margin-bottom: 67px;
  }
  @media (max-width: 1920px) {
    font-size: 40px;
    margin-bottom: 45px;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const SSlideButtonPlay = styled.button`
  display: inline-block;
  transition: transform 0.3s ease 0s;
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: 20px;

  &.play svg {
    animation: move 1.5s infinite linear;
  }

  @keyframes move {
    0% {
      transform: rotate(0deg) scale(1);
      background: transparent;
      border-radius: 50%;
    }
    50% {
      transform: rotate(180deg) scale(0.8);
      background: linear-gradient(90deg, #55287d 0%, #cd2288 100%);
      border-radius: 50%;
    }
    100% {
      transform: rotate(360deg) scale(1);
      background: transparent;
      border-radius: 50%;
    }
  }
  @media (max-width: 1440px) {
    margin-bottom: 46px;
  }
  @media(max-width: 767.98px){
      margin-bottom: 20px;
  }
  @media (min-width: 991.98px) {
    margin-bottom: 20px;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const SSlideButtons = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  @media (max-width: 479.98px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;
  }
`;


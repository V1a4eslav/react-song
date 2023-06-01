import styled from "styled-components";
import mainBg from 'assets/images/Home/GlobalProjections/bg.png';

export const SGlobalSection = styled.section`
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 91px;
  padding-bottom: 68px;
  color: #fff;
  font-family: Lato, sans-serif;
`;

export const SGlobalItems = styled.div`
  padding-top: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const SGlobalItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`
export const SGlobalImg = styled.img`
  @media (max-width: 1440px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`
export const SCountStreams = styled.span`
  font-size: 60px;
  line-height: 123.7%;
  @media (max-width: 1440px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
export const SStreamsTitle = styled.span`
  font-size: 28px;
  line-height: 123.7%;
  @media (max-width: 1440px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
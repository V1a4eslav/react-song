import styled from "styled-components";
import {HomeTitle} from "../../../UIKit/HomeTitle/HomeTitle";

export const SHowItWork = styled.div`
  padding-top: 70px;
  padding-bottom: 44px;
  @media (max-width: 991.98px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const STitle = styled(HomeTitle)`
  margin-bottom: 134px;
  @media (max-width: 991.98px) {
    margin-bottom: 50px;
  }
  @media (max-width: 767.98px) {
    margin-bottom: 30px;
  }
`;

export const SGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 78px;
  @media (max-width: 1440px) {
    grid-gap: 78px;
  }
  @media (max-width: 991.98px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
`;

export const SGridItem = styled.div`
  text-align: center;
`;

export const SGridItemImg = styled.div`
  height: 85px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 991.98px) {
    margin-bottom: 10px;
  }

  & img {
    max-height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

export const SGridItemText = styled.p`
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: -0.005em;
  opacity: 0.9;
  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 991.98px) {
    font-size: 16px;
  }
`;
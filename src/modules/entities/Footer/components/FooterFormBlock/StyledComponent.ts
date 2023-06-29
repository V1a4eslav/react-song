import styled from "styled-components";
import {ITheme} from "../../../../../app/theme/themeInterface";

export const SFooterFormBlock = styled.form`
  padding-left: 10px;
  align-self: start;
  @media (max-width: 991.98px) {
    grid-column: 1/3;
    padding-left: 0;
  }
`;

export const SFormTitle = styled.h3`
  color: #FFF;
  font-size: 32px;
  font-family: 'Lato', sans-serif;
  line-height: 123.7%;
  letter-spacing: 0.48px;
  margin-bottom: 17px;
  @media (max-width: 991.98px) {
    font-size: 25px;
  }
`;

export const SFormInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  @media (max-width: 991.98px) {
    max-width: 600px;
  }

`;

export const SFormInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 58px 0 18px;
  background: rgba(255, 255, 255, .1);
  transition: all .3s linear;
  color: rgba(255, 255, 255, .7);

  &::placeholder {
    color: #fff;
    opacity: 0.2;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    line-height: 123.7%;
    letter-spacing: 0.27px;
  }

  &:focus {
    opacity: 1;
    background: rgba(255, 255, 255, .4);
  }
`;

export const SFormButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color .3s linear;

  & svg {
    width: 30px;
    height: auto;

    path {
      transition: fill .3s linear;
    }
  }

  &:hover,
  &:focus {
    background-color: #fff;

    svg path {
      fill: ${({theme}: ITheme) => theme.colors.violet};
    }
  }
`
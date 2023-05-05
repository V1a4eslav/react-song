import styled from 'styled-components';
import {ITheme} from "../../../../app/theme/themeInterface";

export const BurgerIcon = styled.div`
  display: none;
  cursor: pointer;
  margin-left: 10px;
  z-index: 3;

 @media(max-width: 991.98px) {
    position: relative;
    display: block;
    width: 20px;
    height: 15px;
    & span {
      position: absolute;
      display: inline-block;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({theme}: ITheme) => theme.colors.violet};
      border-radius: 5px;
      transform: translateY(-50%);
      transition: .3s all linear;
    }

    &::before {
      content: '';
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${({theme}: ITheme) => theme.colors.violet};
      border-radius: 5px;
      transition: .3s all linear;
    }

    &::after {
      content: '';
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 2px;
      top: 0;
      left: 0;
      background-color: ${({theme}: ITheme) => theme.colors.violet};
      border-radius: 5px;
      transition: .3s all linear;
    }

    &.active {
      & span {
        transform: scale(0);
        background-color: ${({theme}: ITheme) => theme.colors.violet};
      }

      &::after {
        transform: rotate(45deg) translateY(-50%);
        top: 50%;
        background-color: ${({theme}: ITheme) => theme.colors.violet};
      }

      &::before {
        transform: rotate(-45deg) translateY(50%);
        bottom: 50%;
        background-color: ${({theme}: ITheme) => theme.colors.violet};
      }
    }
  }
`;

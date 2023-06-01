import {ITheme} from "app/theme/themeInterface";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const SHeader = styled.header`
  background-color: ${({theme}: ITheme) => theme.header.bg};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const SHeaderNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100px;
  @media (max-width: 1440px) {
    height: 80px;
  }
`;

export const SHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  @media (max-width: 991.98px) {
    position: absolute;
    width: 250px;
    top: 100%;
    padding-top: 80px;
    padding-bottom: 20px;
    right: 0;
    flex-direction: column;
    align-items: flex-end;
    transition: all 800ms cubic-bezier(.8, 0, .33, 1);
    border-radius: 0 0 100% 150%;
    transform: translateX(250px);
    overflow: hidden;
    &:before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      background: linear-gradient(90deg, #CD2288 0%, #8700FF 100%);
      opacity: 0;
      transition: opacity 800ms cubic-bezier(.8, 0, .33, 1);
      z-index: 0;
    }

    &.active {
      transform: translateX(0px);
      border-radius: 0 0 0 10%;

      &:before {
        opacity: 1;
      }
    }
  }
`;

export const SHeaderLink = styled(NavLink)`
  font-size: 20px;
  line-height: 134.2%;
  padding: 5px 10px;
  color: ${({theme}: ITheme) => theme.header.textPrimary};

  &.active {
    text-decoration: underline;
  }

  @media (max-width: 991.98px) {
    z-index: 1;
    color: #18E3E7;
  }
`
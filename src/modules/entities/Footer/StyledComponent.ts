import styled, {css} from "styled-components";
import {ITheme} from "../../../app/theme/themeInterface";
import {SLogoContainer} from "../../UIKit/Logo/SLogo";
import {Link} from "react-router-dom";

export const SFooter = styled.footer`
  background-color: ${({theme}: ITheme) => theme.colors.violet};
  padding: 97px 0 40px;
  @media(max-width: 1439.98px){
      padding: 30px 0;
  }
`;

export const SFooterInner = styled.div`
  display: grid;
  grid-template-columns:1fr 300px 348px;
  align-items: center;
  @media(max-width: 991.98px){
    grid-template-columns:1fr 1fr;
    row-gap: 20px;
    column-gap: 10px;
    align-items: start;
  }
`;

export const SFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  ${SLogoContainer} {
    margin-bottom: 10px;
    margin-right: 0;
  }
`;

export const SFMainInfoBlock = styled.div`
  display: inline-flex;
  column-gap: 25px;
  color: #FFF;
  font-size: 19px;
  font-weight: 300;
  line-height: 155.7%;
  letter-spacing: 0.475px;
  text-transform: capitalize;
  @media(max-width: 991.98px){
    column-gap: 10px;
    font-size: 14px;
  }
`;

export const SFMainInfoIcon = styled.img`
  width: 26px;
  height: auto;
  align-self: start;
`;

export const SFNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 23px;
  @media(max-width: 991.98px){
    row-gap: 12px;
  }
`;

export const SFNavLink = styled(Link)`
  text-align: center;
  color: #FFF;
  font-size: 22px;
  font-weight: 300;
  line-height: 123.7%;
  text-transform: capitalize;
  opacity: 0.699999988079071;
  transition: opacity .3s linear;
  width: fit-content;

  &:hover {
    opacity: 1;
  }
`;




import styled from "styled-components";
import {Link} from "react-router-dom";
import {ITheme} from "../../../app/theme/themeInterface";

export const SLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-right: 25px;

  img {
    flex: 0 0 56px;
  }
`;

export const SLogoText = styled.span.attrs(props => ({
    color: props.color,
}))`
  color: ${props=>props.color ? props.color : ({theme}:ITheme)=>theme.colors.violet};
  font-size: 22px;
`;
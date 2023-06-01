import styled from "styled-components";
import {IHomeTitle} from "./HomeTitle";
import {ITheme} from "../../../app/theme/themeInterface";

export const SHomeTitle = styled.h2.attrs((props: IHomeTitle) => ({
    color: props.color,
    ta: props.ta,
}))`
  font-family: 'Lato', sans-serif;
  color: ${props => props.color || (({theme}: ITheme) => theme.colors.violet)};
  text-align: ${props => props.ta || 'center'};
  font-weight: 700;
  font-size: 60px;
  line-height: 123.7%;
  @media(max-width: 1440px){
      font-size: 45px;
  }
  @media(max-width: 991.98px){
      font-size: 30px;
  }
`;

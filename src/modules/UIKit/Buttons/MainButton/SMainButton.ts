import styled from "styled-components";
import {IMainButton} from "./MainButton";

export const SMainButton = styled.button.attrs((props: IMainButton) => ({
    color: props.color,
    padding: props.padding,
    bgColor: props.bgColor,
    br: props.br,
    margin: props.margin,
}))`
  color: ${props => props.color};
  padding: ${props => props.padding};
  background-color: ${props => props.bgColor};
  border-radius: ${props => props.br};
  margin: ${props => props.margin};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 1px;
  transition: transform 0.3s ease 0s;
  @media (max-width: 1440px) {
    padding: 15px 9px;
    font-size: 16px;
  }
  @media (min-width: 991.98px) {
    &:hover {
      transform: scale(.95);
    }
  }
`;
import styled from "styled-components";
import {ReactNode} from "react";

export interface ITitle {
    children: ReactNode,
    color?: string,
    fz?: string,
    tt?: string
}

export const STitleBlock = styled.h2.attrs((props: ITitle) => ({
    color: props.color,
    fz: props.fz,
    tt: props.tt,
}))`
  display: inline-block;
  color: ${props => props.color ?? 'inherit'};
  font-size: ${props => props.fz ?? '60px'};
  text-transform: ${props => props.tt ?? 'none'};
  font-weight: 700;
  line-height: 123.7%;
  @media(max-width: 991.98px){
    font-size: 30px;
  }

  &::after {
    content: "";
    display: block;
    border-radius: 5px;
    background: linear-gradient(90deg, #55287d 0%, #cd2288 100%);
    height: 8px;
    width: 100%;
    margin-top: 5px;
  }
`
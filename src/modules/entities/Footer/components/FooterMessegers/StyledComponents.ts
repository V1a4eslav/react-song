import styled from "styled-components";
import {Link} from "react-router-dom";

export const SFooterMessengers = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16.73px;
  margin-top: 37px;
`;

export const SMessengersItem = styled(Link)`
  border-radius: 46px;
  background: #833DC1;
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color .3s linear;
  svg{
    object-fit: contain;
    path{
      transition: fill .3s linear;
    }
  }
  &:hover,
  &:focus{
    background-color: #fff;
    svg path{
      fill: #833DC1;
      
    }
  }
`
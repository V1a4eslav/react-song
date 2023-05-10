import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const StyleSignInBtn = css`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  transition: all 0.3s ease 0s;
  color: #fff;
`

export const SSignInBtn = styled(Link)`
  ${StyleSignInBtn};
  padding: 10px 29px 10px;
  border-bottom: 3px solid #fff;
  @media (min-width: 998.98px) {
    &:hover {
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
    }
  }
  @media (max-width: 998.98px) {
    align-self: flex-start;
  }
`
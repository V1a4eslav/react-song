import styled, {css} from "styled-components";


const StyleBtn = css`
  width: 66px;
  height: 36px;
  transform: none;
  top: auto;
  bottom: 30px;
  z-index: 10;

  &:before {
    display: none;
  }

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    transition: .3s all linear;
  }

  @media (max-width: 1440px) {
    width: 30px;
    height: 16px;
  }
`

export const SNextBtn = styled.div`
  ${StyleBtn};
  left: 100px;
  @media (min-width: 991.98px) {
    &:hover {
      svg {
        transform: scale(1.1);

        path {
          opacity: 1;
        }
      }
    }
  }
  @media (max-width: 1440px) {
    left: 50px;
  }
`;

export const SPrevBtn = styled.div`
  ${StyleBtn};
  left: 10px;

  & svg {
    transform: rotate(180deg);
  }

  @media (min-width: 991.98px) {
    &:hover {
      svg {
        transform: scale(1.1) rotate(180deg);

        path {
          opacity: 1;
        }
      }
    }
  }
`;

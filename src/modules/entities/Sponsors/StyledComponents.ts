import styled from "styled-components";

export const SSponsorsBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  overflow-x: auto;
  height: 126px;
  @media (max-width: 1440px) {
    height: 80px;
  }

  & img {
    max-height: 100%;
    max-width: 200px;
    object-fit: contain;
    object-position: center;
    @media (max-width: 1440px) {
      max-width: 100px;
    }
  }
`;

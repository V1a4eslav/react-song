import styled from "styled-components";
import {Link} from "react-router-dom";
import {ITheme} from "../../../../app/theme/themeInterface";

export const SUser = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 20px;
  margin-left: auto;
`;

export const SUserText = styled.span`
  font-size: 20px;
  line-height: 134.2%;
  padding: 5px 10px;
  color: ${({theme}: ITheme) => theme.header.textPrimary};
`
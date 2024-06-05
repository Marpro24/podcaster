import styled from "styled-components";

const HeaderStyled = styled.header`
  position: relative;
  right: 100%;
  padding-top: 20px;
  color: ${({ theme }) => theme.colors.accent};
`;

export default HeaderStyled;

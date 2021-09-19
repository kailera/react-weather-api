import styled from 'styled-components';

export const NavStyle = styled.nav`
  margin-left: 10px;
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
`;

export const NavProfile = styled.div`
  width: 100px;
  height: 100%;
  font-family: ${props => props.theme.fonts.regular};
  line-height: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.textLight};
`;

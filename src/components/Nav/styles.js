import styled from 'styled-components';
import searchIcon from '../../assets/imgs/loupe.png';

export const NavStyle = styled.nav`
  margin-left: 10px;
  width: 100%;
  height: 15vh;
  display: flex;
  gap: 14rem;
  justify-content: flex-start;
`;

export const NavProfile = styled.div`
  display:flex;
  align-items:center;
  width: 100px;
  height: 100%;
  font-family: ${props => props.theme.fonts.regular};
  line-height: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.textLight};
`;

export const SearchBar = styled.div`
  align-self:center;  
  width:300px;
  height:70%;
  display:flex;

`;

export const InputText = styled.input`
  padding: 0.5em;
  font-size: 2.2rem;
  width:80%;
  height:100%;
  background-color:transparent;
  border:1px solid transparent;
  border-radius:3px;
  transition:0.3s ease;
  &:focus{
    border: 1px solid ${props=> props.theme.colors.backgroundGray};
    color:${props=> props.theme.colors.textDark};
  }
`;

export const SearchButton = styled.button`

  width:20%;
  height:100%;
  background-color:transparent;
  background-position: center; 
  background-repeat: no-repeat;
  background-image: url(${searchIcon});
  border:none;
  &:hover{
    background-color:${props=> props.theme.colors.backgroundSemiDark};
  }
`; 

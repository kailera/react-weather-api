import styled from "styled-components";

export const ContainerWeather = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction:row;



  @media (max-width: 800px){
    flex-direction:column;
    justify-content: center;
    align-items: center;
  } 
`;

export const ShowTodos = styled.div`
  width:25%;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const ShowWeather = styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
`;

export const ShowDetails = styled.div`
  width:25%;
  display:flex;
  flex-direction:column;
  gap:20px;
`;

export const Message = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.textLight};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Weather = styled.span`
  padding-top:8rem;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.textLight};
  font-size: 5rem;
`;

export const DetailsWeather = styled.p`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.textLight};
  font-size: 1.4rem;
  font-weight: light;
`;

export const CityWeather = styled.p`
  padding-top:2rem;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.textLight};
  font-size: 2rem;
`;
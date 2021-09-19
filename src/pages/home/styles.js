import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.backgroundDark};
`;

export const Container = styled.div`
  margin-left: 10px;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const Message = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.textLight};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Weather = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.textLight};
  font-size: 5.98rem;
`;

export const Variance = styled.p`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.textLight};
  font-size: 1.4rem;
  font-weight: light;
`;

export const CityWeather = styled.p`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.textLight};
  font-size: 0.88rem;
`;

import React from "react";
import { Wrapper, Container, Message, Weather, Variance, CityWeather } from "./styles";
import { Nav } from '../../components';

const Home = () =>{
  return(

    <Wrapper>
      <Nav/>

      <Container>
        <Message>
          Faça algo bom Hoje!
        </Message>

        <Weather>10°</Weather>
        <Variance>8°/12°</Variance>
        <CityWeather>Ilha Solteira, SP</CityWeather>
      </Container>

    </Wrapper>
  )
};

export default Home;
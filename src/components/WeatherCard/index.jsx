import React from "react";
import { ContainerWeather, ShowTodos, ShowWeather, ShowDetails, Message, Weather, DetailsWeather, CityWeather } from "./styles";


const WeatherCard = ({weatherData}) => {

    return(

        <ContainerWeather>
           
          
            <ShowWeather>
                <Message> Faça algo bom Hoje!</Message>
                <CityWeather>{weatherData.name}, {weatherData.sys.country}</CityWeather>
                <Weather>{weatherData.main.temp}° C</Weather>
            </ShowWeather>

            <ShowDetails>
                <DetailsWeather>Mín: {weatherData.main.temp_min}° C</DetailsWeather>
                <DetailsWeather>Máx: {weatherData.main.temp_max}° C</DetailsWeather>
                <DetailsWeather>Humidade: {weatherData.main.humidity}%</DetailsWeather>
                <DetailsWeather>S. Térmica: {weatherData.main.feels_like}° C</DetailsWeather>
            </ShowDetails>
            
        </ContainerWeather>

    )
}
export default WeatherCard

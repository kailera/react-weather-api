import React, { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import { Nav, WeatherCard, Carousel } from '../../components';
import { useSelector } from "react-redux";
import environment from "../../config/configs";

const Home = () =>{


  const [ lat, setLat ] = useState([]);
  const [ lon, setLon ] = useState([]);
  const [dataWeather, setDataWeather] = useState([])
  const  city  = useSelector((state) => state.cities);

  useEffect(()=>{
    
      const fetchData = async () => {

          if(!city.city){
            navigator.geolocation.getCurrentPosition((position)=>{
              setLat(position.coords.latitude);
              setLon(position.coords.longitude)
            });
            console.log(`latitude: ${lat}, longitude: ${lon}`)
  
            await fetch (`${environment.url}/weather/?lat=${lat}&lon=${lon}&units=metric&appid=${environment.apiKey}`)
            .then(res=> res.json())
            .then((result) => {
              setDataWeather(result);
              console.log(`geolocalizacao inicial: ${result}`)
            });
          }else{
            await fetch (`${environment.url}/weather/?q=${city.city}&units=metric&appid=${environment.apiKey}`)
            .then(res=> res.json())
            .then((result) => {
              setDataWeather(result);
              setLat(result.coord.lat);
              setLon(result.coord.lon);
            })
          }
          
         
          //console.log(lat)
        }
  
      fetchData();

  },[lat, lon, city])

  return(

    <Wrapper>
      <Nav/>

      {(typeof dataWeather.main!='undefined') ? (
        <WeatherCard weatherData = {dataWeather}/>
      ):(
        <div>
          <p>Carregando</p>
        </div>
      )}

    </Wrapper>
  )
};

export default Home;
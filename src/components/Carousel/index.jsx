import React, { useEffect, useState } from "react";
import environment from "../../config/configs";
import axios from 'axios';

const Carousel = ({ coordenates }) =>{

    const [ lat, lon ] = coordenates
    const [curr, setCurr] = useState([]);
    useEffect(()=>{

        const searchSevenDays =  () => {

            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=-20.429794&lon=-51.344784&units=metric&appid=${environment.apiKey}`)
                .then(res => res.data)
                .then((result)=>{
                    const current = result.daily
                    setCurr([current])
                })
        }

        searchSevenDays();

    }, [lat, lon])

    return(
       
        <>
            {(typeof curr !='undefined')? (
                <ul>
                 {curr.map((d, i) => {
                     
                         <li key={i}>{d.humidity}</li>
                    
                 })}
                </ul>
            ):(
                <>Nada aqui no carrousel</>
            )}
        </>
    )
}

export default Carousel;
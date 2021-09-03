import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherComponent";


const API_KEY = "813934b5ef06dfbcca309315bf6262c5";

const Container = styled.div
 `
 display:flex;
 flex-direction:column;
 margin:auto;
 background:white;
 align-items:center;
 box-shadow:0px 3px 6px 0 #555;
 padding:20px 10px;
 border-radius:4px;
 width:380px;
 font-family:Montserrat;
`;

const AppLabel = styled.span
`
color:black;
font-size:18px;
font-weight:bold;
`;



function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
   const response = 
   await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=813934b5ef06dfbcca309315bf6262c5`
   );
   updateWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>
      React Weather App
      </AppLabel>
        {weather ? (<WeatherComponent weather={weather}/>) : (<CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>)}
        {/* <WeatherComponent /> */}
    </Container>
  );
}

export default App;

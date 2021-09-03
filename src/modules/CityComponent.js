import styled from "styled-components";

const WeatherLogo = styled.img 
`
width:140px;
height:140px;
margin:40px auto;
`;

const ChooseCityLabel = styled.span 
`
color:black;
font-size:18px;
font-weight:bold;
margin:10px auto;
`;

const SearchBox = styled.form 
`
display:flex;
flex-direction:row;
border:black solid 1px;
border-radius:2px;
color:black;
margin:20px auto;

& input {
          padding:10px;
          font-size:14px;
          border:none;
          outline:none;
          font-weight:bold;
          font-family:Montserrat;
}

& button {
          padding:0 10px;
          font-size:14px;
          border:none;
          outline:none;
          font-weight:bold;
          color:white;
          background-color:black;
          cursor:pointer;
          font-family:Montserrat;
}

`;

const CityComponent = (props) => {
          const {updateCity, fetchWeather} = props;
          return (
                    <>
                    <WeatherLogo src = "icons/perfect-day.svg" />
                    <ChooseCityLabel>
                              Find Weather of Your City
                    </ChooseCityLabel>
                    <SearchBox onSubmit={fetchWeather}>
                              <input placeholder="City" onChange = {(e) => updateCity(e.target.value)}/>
                              <button type="submit">Search</button>

                    </SearchBox>
                    </>
          )
}

export default CityComponent;
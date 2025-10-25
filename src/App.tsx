import './App.scss'
import { useState, useEffect } from "react";
import weatherApi from "./services/WeatherApi.ts";
import LocationCard from "./Dashboards/LocationCard.tsx";
import WeatherDetails from "./Dashboards/WeatherDetails.tsx";
import WindAndHumidity from "./Dashboards/WindAndHumidity.tsx";

type WeatherData = {
    name: string;
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
    };
    weather: [
        { description: string; icon: string }
    ];
    wind: {
        speed: number;
        deg: number;
        gust: number;
    },
}

function App() {
    const [weather, setWeather] = useState<WeatherData | null>(null);

    async function handleWeather(city:string =  "Moscow" ):Promise<void> {
        const data:unknown = await weatherApi(city);
        setWeather(data as WeatherData);
    }

    useEffect(() => {
        handleWeather();

        const interval = setInterval(() => {
            handleWeather();
        }, 300000);

        return () => clearInterval(interval);
    }, []);

  return (
    <>
      <h1>Weather-app</h1>
        {weather && <LocationCard city={weather?.name}/>}

        {weather && <WeatherDetails
            temp={weather.main.temp}
            feelsLike={weather.main.feels_like}
            description={weather.weather[0].description}
            icon={weather.weather[0].icon}/> }

        {weather && <WindAndHumidity deg={weather.wind.deg} gust={weather.wind.gust} speed={weather.wind.speed}/>}

        {weather && weather.sys.sunrise}
    </>
  )
}

export default App

import './App.scss'
import { useState, useEffect } from "react";
import weatherApi from "./services/WeatherApi.ts";
import LocationCard from "./Dashboards/LocationCard.tsx";

function App() {
    const [weather, setWeather] = useState<unknown | null>(null);

    async function handleWeather(city:string =  "Moscow" ):Promise<void> {
        const data:unknown = await weatherApi(city);
        setWeather(data);
    }

    useEffect(():void => {
        handleWeather();
    }, []);

  return (
    <>
      <h1>Weather-app</h1>
        <button>Press button</button>
        <LocationCard city={weather?.name}/>
    </>
  )
}

export default App

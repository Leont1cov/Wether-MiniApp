import './App.css'
import {useRef} from "react";

function App() {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const inputRef = useRef<HTMLInputElement>(null)

    async function returnData(city: string) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data:unknown = response.json();
        } catch (err) {
            console.error(err);
        }



    }



  return (
    <>
      <h1>Weather-app</h1>
        <input onChange={():void => console.log(inputRef.current?.value)} ref={inputRef} placeholder="city name" />
    </>
  )
}

export default App

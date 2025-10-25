const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

async function WeatherApi (city: string):Promise<unknown> {
    const url:string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    if (!city) throw new Error('city not specified');
    if (!apiKey) throw new Error('apiKey error');

    const response = await fetch(url);

    if(!response.ok) throw new Error('Failed to fetch weather');

    return await response.json();
}

export default  WeatherApi;
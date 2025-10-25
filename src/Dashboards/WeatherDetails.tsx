import "../styles/weatherDetails.scss";

type WeatherDetailsProps = {
    temp: number;
    feelsLike: number;
    description: string;
    icon: string;
}

const WeatherDetails = ({ temp, feelsLike, description, icon }:WeatherDetailsProps) => {
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <>
            <div className="card weatherDetails">
                <h1 className="weatherDetails__temperature">{temp}°C</h1>
                <p className="weatherDetails__feelsLike">Fells like: {feelsLike}°C</p>
                <img src={iconUrl} className="weatherDetails__icon" alt="icon" />
                <p className="weatherDetails__description">{description}</p>
            </div>
        </>
    )
}

export default WeatherDetails;
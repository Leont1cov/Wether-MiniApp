import "../styles/windAndHumidity.scss";

type WindAndHumidityProps = {
    speed: number;
    deg: number;
    gust: number;
}

const WindAndHumidity = ({ speed, deg, gust }:WindAndHumidityProps) => {
    return (
        <>
            <div className="card WindAndHumidity">
                <p className="WindAndHumidity__speed">Speed: {speed} m/s</p>
                <p className="WindAndHumidity__direction">Direction: {deg}°</p>
                <p className="WindAndHumidity__gust">Gust: {gust} m/s</p>
            </div>
        </>
    )
}

export default WindAndHumidity;
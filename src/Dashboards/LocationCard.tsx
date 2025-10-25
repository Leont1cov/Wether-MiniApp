import "../styles/locationCard.scss";

type LocationCardProps = {
    city: string;
}

const LocationCard = ({ city }: LocationCardProps) => {
    const now = new Date();

    let hours:string | number = now.getHours();
    let minutes:string | number = now.getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return (
        <>
            <div className="card locationCard">
                <h2 className="locationCard__city">{city}</h2>
                <h1 className="locationCard__time">{`${hours}:${minutes}`}</h1>
            </div>
        </>
    )
}

export default LocationCard;
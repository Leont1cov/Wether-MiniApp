import "../styles/locationCard.scss";
import {useEffect, useState} from "react";

type LocationCardProps = {
    city: string;
}

const LocationCard = ({ city }: LocationCardProps) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        function updateTime(){
            const now = new Date();
            let hours:string | number = now.getHours();
            let minutes:string | number = now.getMinutes();

            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;

            setTime(hours + ':' + minutes);
        }

        updateTime();

        const interval = setInterval(updateTime,1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className="card locationCard">
                <h2 className="locationCard__city">{city}</h2>
                <h1 className="locationCard__time">{time}</h1>
            </div>
        </>
    )
}

export default LocationCard;
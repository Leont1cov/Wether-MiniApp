import "../styles/search.scss";
import {useState} from "react";

type SearchProps = {
    onSearch: (city: string) => void;
}

const Search = ({ onSearch }:SearchProps) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (city.trim() !== "") {
            onSearch(city.trim());
            setCity("");
        }
    };

    return (
        <>
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <input
                        className="search__input"
                        placeholder="Search for your preffered city..."
                        value={city}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                    />
                </form>
            </div>

        </>
    )
}

export default Search;
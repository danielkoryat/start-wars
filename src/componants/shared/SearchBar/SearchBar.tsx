import { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const [select, setSelect] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/search?q=${search}&select=${select}`);
    }

    const searchOptions = [
        { value: "people", label: 'People' },
        {value: "films", label: 'Films'},
        {value: "vehicles", label: 'Vehicles'},
        {value: "starships", label: 'Starships'},
        {value: "planets", label: 'Planets'}
    ]

    return (
        <form onSubmit={handleSearch} className="searchbar">
            <input
                className="searchbar__input"
                type="search"
                placeholder="Search..."
                value={search}
                required
                onChange={(e) => setSearch(e.target.value)}
            />
            <select
                className="searchbar__select"
                value={select}
                required
                onChange={(e) => setSelect(e.target.value)}
            >
                <option value="" disabled>Select an option</option>
                {searchOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <button className="searchbar__button" type="submit">Search</button>
        </form>
    )
}

export default Searchbar;
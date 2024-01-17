import { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";


const Searchbar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e : React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSearch}>
            <input
              className="navbar__search"
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
    )
}

export default Searchbar
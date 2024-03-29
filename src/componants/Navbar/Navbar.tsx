import { useNavigate } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import Searchbar from "./SearchBar/SearchBar";

const Navbar: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();


  const handleSearch = (e : React.FormEvent) => {
    e.preventDefault();
     
  };


  const routes = [
    { lable: "Home", path: "/" },
    { lable: "People", path: "/people" },
    { lable: "Planets", path: "/planets" },
    { lable: "Films", path: "/films" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {routes.map((route, index) => (
          <li
            className="navbar__item"
            key={index}
            onClick={() => navigate(route.path)}
          >
            {route.lable}
          </li>
        ))}
        <li className="navbar__item">
          <Searchbar />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { useNavigate } from "react-router-dom";
import React from "react";
import "./Navbar.css"

const Navbar: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();

  const routes = [
    { lable: "Home", path: "/" },
    { lable: "Characters", path: "/characters" },
    { lable: "Planets", path: "/planets" },
    { lable: "Films", path: "/films" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {routes.map((route) => (
          <li
            className="navbar__item"
            key={route.lable}
            onClick={() => navigate(route.path)}
          >
            {route.lable}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

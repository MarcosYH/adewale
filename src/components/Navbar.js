import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <ul className="Navb">
      <li className="Accueil">Accueil </li>
      <li className="Apropos"> A propos </li>
      <li className="Contact">Contact </li>
      <li className="Boutique">Boutique </li>
      </ul>
    </nav>
  );
};

export default Navbar;

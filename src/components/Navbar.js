import React from "react";
import "../styles/Navbar.css";
import logo from '../assets/logo.png'
import searchcheckout from '../assets/search&checkout.png'
const Navbar = () => {
  return (
    <nav>
      <ul className="Navb">
      <li className="Accueil">Accueil </li>
      <li className="Apropos"> A propos </li>
      <li className="Contact">Contact </li>
      <li className="Boutique">Boutique </li>
      </ul>
      <img src={logo} alt='LogoAdewalé' className='logo'/>
      <img src={searchcheckout} alt='LogoAdewalé' className='searchcheckout'/>
      
    </nav>
  );
};

export default Navbar;

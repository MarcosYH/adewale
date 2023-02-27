import React from "react";
import "../styles/Navbar.css";
import logo from '../assets/logo.png'
import searchcheckout from '../assets/search&checkout.png'
//import ScrollToTop from "./components/ScrollToTop";
import { useRef } from "react";
const Navbar = () => {
  const Accueil = useRef(null);
  const Apropos = useRef(null);
  const Contact = useRef(null);
  const Boutique = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <nav>
      <ul className="Navb">
      <li onClick={() => scrollToSection(Accueil)} className="Accueil">Accueil </li>
      <li onClick={() => scrollToSection(Apropos)} className="Apropos"> A propos </li>
      <li onClick={() => scrollToSection(Contact)} className="Contact">Contact </li>
      <li onClick={() => scrollToSection(Boutique)} className="Boutique">Boutique </li>
      </ul>
      <img src={logo} alt='LogoAdewalé' className='logo'/>
      <img src={searchcheckout} alt='LogoAdewalé' className='searchcheckout'/>

      <div ref={Apropos} className="sectionapropos" >
      </div>
      <div ref={Contact} className="sectioncontact" >
      </div>
      <div ref={Boutique} className="sectionarticles" >
      </div>
      
    </nav>
  );
};

export default Navbar;
/*<div>
      
</div>*/
import React from 'react';
import '../styles/Footer.css'
import logo from '../assets/logo.png'
import imgfacebook from '../assets/imgfacebook.png'
import imginsta from '../assets/imginsta.png'
import imglinkdiln from '../assets/imglinkdiln.png'
import c from '../assets/c.png'

const Footer = () => {
    return (
        <div>
        <div className='Fondfooter'> </div>
        <img src={imgfacebook} alt='imgface' className='imgface'/>
        <img src={imginsta} alt='imginsta' className='imginsta'/>
        <img src={imglinkdiln} alt='imglink' className='imglinkdiln'/>
        <div className="cercle"> </div>
        <img src={logo} alt='logofooter' className='logofooter'/>
        <span className='Acc'> Accueil</span>
        <span className='Aprop'>A propos</span>
        <span className='Cont'>Contacts</span>
        <span className='Bout'>Boutique</span>
        <img src={c} alt='imgc' className='imgc'/>
        <span className='TextFooter'>Tous droits réservés | FASHION ADEWALE</span>
        </div>
        
    );
}

export default Footer;

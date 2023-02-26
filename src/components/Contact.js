import '../styles/Contact..css';
import imgcontact from '../assets/imgcontact.png'
import fondcontact from '../assets/fondcontact.png'

import React from 'react';

const Contact = () => {
    return (
        <div>
        <h1 className="contact">CONTACTS</h1>
        <div className="soulignement4"> </div>
        <div className="blocContatct">
        <img src={imgcontact} alt='imgcont' className='imgcontact'/>
        <img src={fondcontact} alt='fondcontact' className='fondcontact'/>
        
        </div>
        
        
        </div> 
    );
}

export default Contact;

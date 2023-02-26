import '../styles/Temoignages.css';
import imgTemoignage from '../assets/imgTemoignage.png'
import symbole from '../assets/symbole.png'
import Etoile from '../assets/Etoile.png'
import React from 'react';

const Temoignages = () => {
    return (
        <div>
        <h1 className="temoignages">NOS TéMOIGNAGES</h1>
        <div className="soulignement3"> </div>

        <div className="blocTemoignage"> 
        <div className="bloc1"> </div>
        <div className="bloc2"> </div>
        <img src={imgTemoignage} alt='imgt' className='imgtem'/>
        <span className='Texttemoignage'>J’ai été sidéré par non seulement par l’accueil de Adéwalé et par les vêtements proposés.
        Ma cousine obèse Leila ne pensait pas trouver une robe à sa taille déçue par de nombreuses boutiques.
        Adéwalé avec ses stylistes est restée à l’écoute de ses besoins .
        Je vous conseille vivement de faire une visite et de passer vos commandes. </span>
        <span className='Nomtemoigneuse'> John DOE </span>
        <span className='professiontemoigueuse'> - Nsia directrice </span>
        <img src={Etoile} alt='Etoile' className='Etoile'/>
        <img src={symbole} alt='symb' className='symbole'/>
        </div>
        
        </div>
        

    );
}

export default Temoignages;

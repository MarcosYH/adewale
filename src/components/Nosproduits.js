import '../styles/Nosproduits.css';
//import { Swiper, SwiperSlide } from 'swiper/react';
import article1 from '../assets/article1.png'
import article2 from '../assets/article2.png'
import article3 from '../assets/article3.png'
import React from 'react';

const Nosproduits = () => {
    return (
        <div>
        <h1 className="produits"> NOS PRODUITS</h1>
        <div className="soulignement2"> </div>
        <div className='listeproduits'> 
        <img src={article1} alt='prod1' className='art1'/>
        <img src={article2} alt='prod2' className='art2'/>
        <img src={article3} alt='prod3' className='art3'/>
        <div className='barArticle1' > </div>
        <div className='barArticle2' > </div>
        <div className='barArticl3' > </div>
        <span className='prix1'> 50€ </span>
        <span className='prix2'> 50€ </span>
        <span className='prix3'> 50€ </span>
        </div>
        

        </div>
    );
}

export default Nosproduits;

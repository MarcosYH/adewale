import '../styles/Nosproduits.css';
//import { Swiper, SwiperSlide } from 'swiper/react';
import article1 from '../assets/article1.png'
import article2 from '../assets/article2.png'
import article3 from '../assets/article3.png'
import Rectangle2 from '../assets/Rectangle2.png';
import panier from '../assets/panier.png';
import React from 'react';

const Nosproduits = () => {
    return (
        <div>
        <img src={Rectangle2} alt='Rectangle2' className='Rectangle2'/>
        <h1 className="produits"> NOS PRODUITS</h1>
        <div className="soulignement2"> </div>
        <div className='listeproduits'> 
        <img src={article1} alt='prod1' className='art1'/>
        <img src={article2} alt='prod2' className='art2'/>
        <img src={article3} alt='prod3' className='art3'/>
        <div className='barArticle1' > </div>
        <div className='barArticle2' > </div>
        <div className='barArticl3' > </div>
        <span className='prix1'> 109,23$ </span>
        <span className='prix2'> 434,89$ </span>
        <span className='prix3'> 500,99$ </span>
        <img src={panier} alt='pan1' className='panier1'/>
        <img src={panier} alt='pan2' className='panier2'/>
        <img src={panier} alt='pan3' className='panier3'/>

        <a href="https://www.african-avenue.com/239-julius-" method="get" target="_blank" class="buttona">
        <button className="button1" type="button" >Achetez</button>
        </a>

        <a href="https://www.african-avenue.com/239-julius-" method="get" target="_blank" class="buttona">
        <button className="button2" type="button" >Achetez</button>

        </a><a href="https://www.african-avenue.com/239-julius-" method="get" target="_blank" class="buttona">
        <button className="button3" type="button" >Achetez</button>
        </a>

        </div>
        
        </div>
    );
}

export default Nosproduits;

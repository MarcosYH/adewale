// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/Produits.css'
import article1 from '../assets/article1.png'
import article2 from '../assets/article2.png'
import article3 from '../assets/article3.png'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.min.css';

function Produits () {
  return (
    <div className='articlee'>
        
    <Swiper
    
    centeredSlides={true}
    
    slidesPerView={'auto'}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide> 
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
      </div></SwiperSlide>
      <SwiperSlide><img src={article2} alt='prod2' className='art2'/></SwiperSlide>
      <SwiperSlide><img src={article3} alt='prod3' className='art3'/></SwiperSlide>

      <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        //  <div className="swiper-pagination"></div>
        </div>

    </Swiper>

    </div>
    
  );
};
export default Produits;
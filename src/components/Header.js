import "../styles/Header.css";
import Img1 from '../assets/Img1.png'
import Img2 from '../assets/Img2.png'
import Img3 from '../assets/Img3.png'
import Img4 from '../assets/Img4.png'
import Img5 from '../assets/Img5.png'
import Img6 from '../assets/Img6.png'
import Img7 from '../assets/Img7.png'
import Img8 from '../assets/Img8.png'
import Img9 from '../assets/Img9.png'
import Img10 from '../assets/Img10.png'

function Header(){
    return(

        <div>
        <h1 className='text'>
        <div>
        <span className='text1'>REFLECTEZ QUI VOUS ÊTES AVEC NOTRE </span>
        <span className='text2'>STYLE TYPIQUEMENT </span>
        <span className='text2-2'> AFRICAIN </span>
        </div>
        </h1>
        <h3 className="text3">
        Révélez votre identité avec la boutique adéwae. Avec ses produits, transformez votre style,votre look en un style purement africain.
        </h3>
        <div className="depl">
        <img src={Img1} alt='1' className='img1'/>
        <img src={Img2} alt='2' className='img2'/>
        <img src={Img3} alt='3' className='img3'/>
        <img src={Img4} alt='4' className='img4'/>
        <img src={Img5} alt='5' className='img5'/>
        <img src={Img6} alt='6' className='img6'/>
        <img src={Img7} alt='7' className='img7'/>
        <img src={Img8} alt='8' className='img8'/>
        <img src={Img9} alt='9' className='img9'/>
        <img src={Img10} alt='10' className='img10'/>
        </div>

        <div className="but">
        <a href="https://www.african-avenue.com/239-julius-" method="get" target="_blank" class="buttona">
        <button className="button" type="button" >Achetez maintenant</button>
        </a>
        </div>

        </div>
    );
}

export default Header;


import "../styles/Apropos.css";
import ImgApropos1 from '../assets/ImgApropos1.png';
import Rectangle1 from '../assets/Rectangle1.png';
function Apropos(){
    return(
        <div>
        <h1 className="apropos"> A PROPOS</h1>
        <div className="soulignement"> </div>
        <img src={Rectangle1} alt='Rectangle1' className='Rectangle1'/>

        <h3 className="textapropos"> Adewalé rassemble une collection de vêtements traditionnels qui célèbre toute une diversité africaine. Elle propose des modèles africains pour hommes femmes et enfants. Nos  modèles sont accessibles à tous et disposons de stylistes de pointe à votre écoute.
        </h3>
        <img src={ImgApropos1} alt='Apropos' className='Apropos1'/>
        <div className="bloc123"> 
        <div className="Diver">
        </div>
        <h2 className='number1'>01</h2>
        <span className='Diversifié'>Diversifié</span>

        <div className="Quali">
        </div>
        <h2 className='number2'>02</h2>
        <span className='Qualité'>Qualité</span>

        <div className="Tradi">
        </div>
        <h2 className='number3'>03</h2>
        <span className='Tradis'>Tradis</span> 
        </div>
        
         </div>
         
    );
}

export default Apropos;

/*<div>
</div>*/
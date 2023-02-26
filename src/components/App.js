//import Interfaceweb from './Interfaceweb'; 
import '../styles/App.css';
import Header from './Header';
import Navbar from './Navbar';
import Apropos from './Apropos.js';
import Nosproduits from './Nosproduits';
import Temoignages from './Temoignages';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  
  return (
    <div>
    <Navbar/>
    <Header/>
    <Apropos/>
    <Nosproduits/>
    <Temoignages/>
    <Contact/>
    <Footer/>
		</div>
  );
}
document.body.style.backgroundColor = "#f5f5f5";
document.body.style.margin = "0";

export default App;

//import Interfaceweb from './Interfaceweb'; 
import '../styles/App.css';
import Header from './Header';
import Navbar from './Navbar';
import Apropos from './Apropos.js';
import Nosproduits from './Nosproduits';
import Temoignages from './Temoignages';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  
  return (
    <div>
    <Navbar/>
    <ScrollToTop/>
    <Header/>
    <Apropos/>
    <Nosproduits/>
    <Temoignages/>
    <Contact/>
    <Footer/>
		</div>
  );
}
document.body.style.backgroundColor = "#ffffff";
document.body.style.margin = "0";

export default App;

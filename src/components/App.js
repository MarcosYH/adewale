//import Interfaceweb from './Interfaceweb'; 
import Header from './Header';
import Navbar from './Navbar';
import Apropos from './Apropos.js';
import Nosproduits from './Nosproduits';

function App() {
  return (
    <div>
    <Navbar/>
    <Header/>
    <Apropos/>
    <Nosproduits/>
   
		</div>
  );
}
document.body.style.backgroundColor = "#f5f5f5";
document.body.style.margin = "0";

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Nabvar';

function App() {
  const cards = [
    {
      titulo:"Olymphea Intense",
     importe:4250,
     contenido:"Envase de 100 ml.",
     img:"https://mardefraganciasbs.com.ar/images/olimpheaintensemujer.jpeg"
    },
     {
      titulo:"My Way",
      importe:4000,
      contenido:"Envase de 100 ml.",
      img:"https://mardefraganciasbs.com.ar/images/miway.jpg"
     }
  ]
  

  return (
    <header>
      <Navbar/>
      
    </header>
    
      
    
  );
}

export default App;

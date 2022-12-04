import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Nabvar';
import Card from './Components/Card/Card';
import Main from './Components/Main/Main';


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
    <div>
      <header>
        <Navbar/>
        
      </header>
      <Main>
        <div className=''>
          {cards.map(({titulo,importe,contenido,img},index)=>(
            <Card
            key={index}
            titulo={titulo}
            importe={importe}
            contenido={contenido}
            img={img}
            />
          ))}
        </div>
      </Main>
    </div> 
   
      
    
  );
}

export default App;

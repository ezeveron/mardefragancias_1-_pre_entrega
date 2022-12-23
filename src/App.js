import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Nabvar';
import Card from './Components/Card/Card';
import Main from './Components/Main/Main';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import ItemListConteiner from './Components/ItemListContainer/ItemListConteiner';
import Item from './Components/Item/Item';


function App() {


  return (
    <Router>
        <Navbar/>
        <h1>Bienvenido a la Pagina Principal</h1>
        <Routes>
          
          <Route path='/' element={<ItemListConteiner/>}/>
          <Route path='/Card' element={<Card/>}/>

          
       </Routes>
    </Router>


      
    
  );
}

export default App;

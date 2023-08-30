import './App.css'
import Nav from './Nav/Nav';
import About from './About';
import Deatil from './Deatil';
import Cards from './Cards/Cards';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Form from './Form/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import Favorites from './Favorites/Favorites';




function App() {
   let [characters, setCharacters] = useState([])
   const location = useLocation()

   const navigate = useNavigate()
   const [access, setAccess] = useState(false)

   let EMAIL = 'ejemplo@gmail.com'
   let PASSWORD = 'unaPassword'
   
   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate("/home")
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {  //
      let num = Number(id)
      
      const charactersFiltered = characters.filter((numero) => numero.id !== num)
      setCharacters(charactersFiltered);
   }



   return (
      <div className='App'>
         <div className='nav-spacer'>
         {location.pathname !== "/" && <Nav onSearch={onSearch}/>} 
         </div>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/deatil/:id' element={<Deatil/>}/>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/favorites" element={<Favorites/>} />
         </Routes>
      </div>
   );
}

export default App;

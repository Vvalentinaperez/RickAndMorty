import './App.css'
import Nav from './Nav/Nav';
import About from "./About/About"
import Deatil from './Detalle/Deatil';
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
   
   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }


   const randomHandler = () => {
      let haveIt = []

      let random = (Math.random() * 812).toFixed();

      random = Number(random);

      if(!haveIt.includes(random)){
         haveIt.push(random);
         axios(`http://localhost:3001/rickandmorty/character/${random}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
      }else{
         console.log("Ya agregaste todos los personajes");
         return false;
      }
   }

   const onSearch = async (id) => {
     await axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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
    <>
      <div className='App'>
         <div className='nav-spacer'>
         {location.pathname !== "/" && <Nav onSearch={onSearch}  random={randomHandler}/> } 
         </div>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/deatil/:id' element={<Deatil/>}/>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/favorites" element={<Favorites/>} />
         </Routes>
      </div>
      </>
   );
}

export default App;

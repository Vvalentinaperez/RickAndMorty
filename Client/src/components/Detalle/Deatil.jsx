import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Deatil.css"
import logo from '../imagenes/nuevologo.png'

const Deatil = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    
   
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(
            ({ data }) => {
              if (data.name) {
                setCharacter(data);
              } else {
                alert("No hay personajes con ese ID");
              }
            }
          );
          return setCharacter({});
        }, [id]);

        useEffect(() => {
          
          setTimeout(() => {
              document.querySelector(".detalleContainer").classList.add("active");
          }, 100);  
      }, [id]);

      let fontSize = '40px'; // tamaño por defecto

      if(character?.name && character.name.length > 20) {
       fontSize = '30px';
      } else if(character?.name && character.name.length > 30) {
      fontSize = '20px'; 
      }

     return(
      <>
      <div className="detalleContainer">
          <div className="nameContenedor"  style={{ fontSize: fontSize }}>
            <h2 className="name" style={{ fontSize: '40px' }}>{character?.name}</h2>
          </div>
          <div className="propertiesContainer">
              <h2>{character?.status}</h2>
              <h2>{character?.species}</h2>
              <h2>{character?.gender}</h2>
              <h2>{character?.origin?.name}</h2>
          </div>
     
      <div className="detalleImagen">
          <img src={character?.image} alt={character?.name} />
      </div>
      <div className="logo">
          <img src={logo} alt="" className="logoDetalle" />
      </div>
  </div>
  <div className="creditos" >¿QUERES SABER MÁS DE MI? </div>
  </>
     )
}

export default Deatil;


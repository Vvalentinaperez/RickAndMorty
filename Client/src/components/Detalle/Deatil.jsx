import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Deatil.css"
import logo from '../imagenes/logo.png'

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
          // ... tu código para obtener el personaje ...
      
          // Activa la animación después de obtener el personaje
          setTimeout(() => {
              document.querySelector(".detalleContainer").classList.add("active");
          }, 100);  // Puedes ajustar el tiempo si lo consideras necesario
      }, [id]);

     return(
        <div className="detalleContainer">
          <div className="detalleText">
          <div className="nameContenedor"> 
          <h2 className="name" >{character?.name}</h2>
            </div>  
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
          </div>
            <div className="detalleImagen">
            <img src={character?.image} alt={character?.name}/>
            </div>
            <div className="logo">
              <img src={logo} alt="" className="logoDetalle" />
            </div>
        </div>
     )
}

export default Deatil;


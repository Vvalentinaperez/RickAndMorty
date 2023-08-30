import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {addFav, removeFav} from '../Redux/action'
import { useState, useEffect } from "react"
import './Card.css'

const Card = ({id, name, species, origin, image, gender,  onClose, removeFav, addFav, myFavorites}) => {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
     if(isFav === true){
      setIsFav(false)
      removeFav(id)
     }else if(isFav === false){
      setIsFav(true)
      addFav({id, name, gender, species, origin, image, onClose})
     }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className="contenedorCard">
         <div className="card">
            <div className="botonX">
               <button onClick={() => onClose(id)}>X</button>
            </div>
          
        <Link to={`/deatil/${id}`}>
          <h1 className="nameDetail">{name}</h1>
        </Link>
        
         <h3>{species}</h3>
         <h3>{origin}</h3>
         <div className="cover__card">
           <img src={image} alt='' />
         </div>
         <div >{
           isFav ? (
             <button onClick={handleFavorite}>❤️</button>
               ) : (
             <button onClick={handleFavorite}>🤍</button>
               )
         }</div>
         </div>
        
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites,
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Card)

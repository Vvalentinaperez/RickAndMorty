import Card from '../Card'
import './Cards.css'


const Cards = ({characters, onClose}) => { 

   return ( 
      <>
   <div className='card-container'>
      {
         characters.slice(-4).map(({id, name, status, species, gender, origin, image}) => {
            return (
              <Card 
              key={id} //Es unicamente para react, para que sepa identificarlo
              id = {id} //Es para que nosotros pod identificar cada uno
              name = {name}
              status = {status}
              species = {species}
              gender = {gender}
              origin = {origin.name} //Origin es un objeto, debo entrar si o si al name pq si no me va a marcar error. 
              image = {image}
              onClose ={onClose}
              />
             
            )
         })
      }
   </div>
   <div className="creditos" >BIENVENIDO, ESTE ES TU HOME!!! </div>
   </>
   );
}

export default Cards;


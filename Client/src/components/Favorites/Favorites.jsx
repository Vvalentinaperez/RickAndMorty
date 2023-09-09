import { connect } from "react-redux";
import Card from '../Card'
import { useDispatch } from "react-redux";
import { filterCard, orderCards } from "../../Redux/action";
import { useEffect, useState, } from "react";
import "./Favorites.css"



const Favorites = ({myFavorites}) => {

    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        setCharacters(myFavorites)
    },[myFavorites])

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value))
        // setAux(true)
    }

    const handleFilter = (event) => {
        console.log(typeof event.target.value);
        dispatch(filterCard(event.target.value))
    }


    
    return(
        <div>
            <div className="filtersContainer">
            <select onChange={handleOrder}>
                <option value="A" >Ascendente</option>
                <option value="D" >Descendente</option>
            </select>

            <select onChange={handleFilter} >
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
                <option value="Genderless" >Genderless</option>
                <option value="unknown" >unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>
            </div>
            
            <div className="card-container">
            {
                characters?.map(fav => {
                    return (
                        <Card 
                           key={fav.id}
                           id={fav.id}
                           name={fav.name}
                           species={fav.species}
                           image={fav.image}
                           onClose={fav.onClose}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps, 
    null
)(Favorites)
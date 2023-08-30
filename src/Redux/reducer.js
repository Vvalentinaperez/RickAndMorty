import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./action-types";

const initialState = {
    myFavorites : [],
    allCharacters: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            console.log(payload);
            return{
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters:[...state.allCharacters, payload]
            }
    
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }
        case FILTER_CARDS:
            // let prueba = state.allCharacters.filter(character => { console.log(allCharacter.gender);
                // character.gender == payload})
        
            console.log(state.myFavorites, state.allCharacters);
            return{
                ...state,
                myFavorites: payload === "allCharacters"
                ?[...state.allCharacters]
                :[...state.allCharacters.filter(character => character.gender === payload)] 

            }
        case ORDER_CARDS:
            const orderCharacters = [...state.allCharacters]
            return{
                ...state, 
                myFavorites:
                payload === "A"
                ?orderCharacters.sort((a, b) => a.id - b.id) : orderCharacters.sort((a, b) => b.id - a.id)
            }
            
        default:
            return{...state};
    }
}



export default reducer;
import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./action-types";
const initialState = {
    myFavorites : [],
    allCharacters: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return { 
                ...state,
                 myFavorites: payload,
                 allCharacters: payload };
    
        case REMOVE_FAV:
            return{
                ...state, 
                myFavorites: payload,
                allCharacters: payload
            }
        case FILTER_CARDS:
          
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
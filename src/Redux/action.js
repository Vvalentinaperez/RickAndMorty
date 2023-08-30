import { ADD_FAV, REMOVE_FAV, ORDER_CARDS, FILTER_CARDS } from "./action-types"


export const addFav = (character) => {
    return{type: ADD_FAV, payload: character}
}

export const removeFav = (id) => {
    return{type: REMOVE_FAV, payload: id }
}

export const filterCard = (gender) => {
    return {type: FILTER_CARDS, payload: gender}
}

export const orderCards = (orden) => {
    return{type: ORDER_CARDS, payload: orden}
}                               


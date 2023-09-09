import { ADD_FAV, REMOVE_FAV, ORDER_CARDS, FILTER_CARDS } from "./action-types"
import axios from "axios"

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAV',
             payload: data,
          });
       });
    };
 };

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
 };

export const filterCard = (gender) => {
    return {type: FILTER_CARDS, payload: gender}
}

export const orderCards = (orden) => {
    return{type: ORDER_CARDS, payload: orden}
}                               

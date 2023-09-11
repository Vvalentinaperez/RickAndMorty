import { ADD_FAV, REMOVE_FAV, ORDER_CARDS, FILTER_CARDS } from "./action-types"
import axios from "axios"

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';

    return async (dispatch) => { //¿Porque va aca el async? Porque es esta funcion la que hace algo asincronico
      try {
        const { data } = axios.post(endpoint, character) 

        if(!data.length) throw Error("No hay favoritos")

            return dispatch({
               type: ADD_FAV,
               payload: data,
            });
      } catch (error) {
         console.log(error.message);
      }
    };
 };

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;

    return async (dispatch) => {
      try {
        await axios.delete(endpoint).then(({ data }) => {

         if(!data.length) throw Error("No hay favoritos");

            return dispatch({
               type: 'REMOVE_FAV',
               payload: data,
         });
      });
      } catch (error) {
         console.log(error.message);
      }
    };
 };

export const filterCard = (gender) => {
    return {type: FILTER_CARDS, payload: gender}
}

export const orderCards = (orden) => {
    return{type: ORDER_CARDS, payload: orden}
}                               


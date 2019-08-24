import axios from "axios";
import { POKEMONS_REQUEST, POKEMONS_RECEIVED, POKEMONS_ERROR } from './constants';

function requestPokemonList() {
  return {
    type: POKEMONS_REQUEST,
  };
}
function receivePokemonList(json) {
  return {
    type: POKEMONS_RECEIVED,
    result: json.data,
  };
}
function errorPokemonList(error) {
  return {
    type: POKEMONS_ERROR,
    error
  };
}
export default function fetchPokemonList() {
  return dispatch => {
    dispatch(requestPokemonList());
    return axios.get(`https://pokeapi.co/api/v2/pokemon/??offset=15&limit=15`)
      .then((result) => {
        dispatch(receivePokemonList(result));
        return result;
      }).catch((error) => {
        dispatch(errorPokemonList(error));
      });
  };
}

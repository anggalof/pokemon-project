import axios from "axios";
import { POKEMON_REQUEST, POKEMON_RECEIVED, POKEMON_ERROR } from './constants';

function requestMovie() {
  return {
    type: POKEMON_REQUEST,
  };
}
function receiveMovie(json) {
  return {
    type: POKEMON_RECEIVED,
    result: json.data,
  };
}
function errorMovie(error) {
  return {
    type: POKEMON_ERROR,
    error
  };
}
export default function fetchMovie(id) {
  return dispatch => {
    dispatch(requestMovie());
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((result) => {
        dispatch(receiveMovie(result));
        return result;
      }).catch((error) => {
        dispatch(errorMovie(error));
      });
  };
}

import axios from "axios";
import { MOVIES_REQUEST, MOVIES_RECEIVED, MOVIES_ERROR } from './constants';

function requestMovies() {
  return {
    type: MOVIES_REQUEST,
  };
}
function receiveMovies(json) {
  return {
    type: MOVIES_RECEIVED,
    result: json.data,
  };
}
function errorMovies(error) {
  return {
    type: MOVIES_ERROR,
    error
  };
}
export default function fetchMovies(page) {
  return dispatch => {
    dispatch(requestMovies());
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=af2063829763f377ee050b667f4d0894&language=en-US&page=${page}`)
      .then((result) => {
        dispatch(receiveMovies(result));
        return result;
      }).catch((error) => {
        dispatch(errorMovies(error));
      });
  };
}

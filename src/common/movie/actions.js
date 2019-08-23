import axios from "axios";
import { MOVIE_REQUEST, MOVIE_RECEIVED, MOVIE_ERROR } from './constants';

function requestMovie() {
  return {
    type: MOVIE_REQUEST,
  };
}
function receiveMovie(json) {
  return {
    type: MOVIE_RECEIVED,
    result: json.data,
  };
}
function errorMovie(error) {
  return {
    type: MOVIE_ERROR,
    error
  };
}
export default function fetchMovie(id) {
  return dispatch => {
    dispatch(requestMovie());
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=af2063829763f377ee050b667f4d0894&language=en-US`)
      .then((result) => {
        dispatch(receiveMovie(result));
        return result;
      }).catch((error) => {
        dispatch(errorMovie(error));
      });
  };
}

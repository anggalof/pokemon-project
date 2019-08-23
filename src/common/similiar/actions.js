import axios from "axios";
import { SIMILIAR_REQUEST, SIMILIAR_RECEIVED, SIMILIAR_ERROR } from './constants';

function requestSimiliarMovie() {
  return {
    type: SIMILIAR_REQUEST,
  };
}
function receiveSimiliarMovie(json) {
  return {
    type: SIMILIAR_RECEIVED,
    result: json.data,
  };
}
function errorSimiliarMovie(error) {
  return {
    type: SIMILIAR_ERROR,
    error
  };
}
export default function fetchSimiliarMovie(id, page) {
  return dispatch => {
    dispatch(requestSimiliarMovie());
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=af2063829763f377ee050b667f4d0894&language=en-US&page=${page}`)
      .then((result) => {
        dispatch(receiveSimiliarMovie(result));
        return result;
      }).catch((error) => {
        dispatch(errorSimiliarMovie(error));
      });
  };
}

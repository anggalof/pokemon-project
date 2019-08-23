import axios from "axios";
import { RECOMMENDATIONS_REQUEST, RECOMMENDATIONS_RECEIVED, RECOMMENDATIONS_ERROR } from './constants';

function requestRecommendations() {
  return {
    type: RECOMMENDATIONS_REQUEST,
  };
}
function receiveRecommendations(json) {
  return {
    type: RECOMMENDATIONS_RECEIVED,
    result: json.data,
  };
}
function errorRecommendations(error) {
  return {
    type: RECOMMENDATIONS_ERROR,
    error
  };
}
export default function fetchRecommendations(page) {
  return dispatch => {
    dispatch(requestRecommendations());
    return axios.get(`https://api.themoviedb.org/3/movie/424783/recommendations?api_key=af2063829763f377ee050b667f4d0894&language=en-US&page=${page}`)
      .then((result) => {
        dispatch(receiveRecommendations(result));
        return result;
      }).catch((error) => {
        dispatch(errorRecommendations(error));
      });
  };
}

import {
  MOVIE_REQUEST,
  MOVIE_RECEIVED,
  MOVIE_ERROR,
} from './constants';

function reducer(state = {
  isFetching: false,
  items: {},
  status: '',
}, action) {
    switch (action.type) {
      case MOVIE_REQUEST:
        return {
          ...state,
          isFetching: true,
          status: 'request'
        };
      case MOVIE_RECEIVED:
        return {
          isFetching: false,
          items: {
            data: action.result,
          },
          status: 'receiving'
        };
      case MOVIE_ERROR:
        return {
          ...state,
          isFetching: false,
          status: action.error
        };
      default:
        return state;
    }
}
export default reducer;


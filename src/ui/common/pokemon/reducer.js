import {
  POKEMON_REQUEST,
  POKEMON_RECEIVED,
  POKEMON_ERROR,
} from './constants';

function reducer(state = {
  isFetching: false,
  items: {},
  status: '',
}, action) {
    switch (action.type) {
      case POKEMON_REQUEST:
        return {
          ...state,
          isFetching: true,
          status: 'request'
        };
      case POKEMON_RECEIVED:
        return {
          isFetching: false,
          items: {
            data: action.result,
          },
          status: 'receiving'
        };
      case POKEMON_ERROR:
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


import {
  POKEMONS_REQUEST,
  POKEMONS_RECEIVED,
  POKEMONS_ERROR,
} from './constants';

function reducer(state = {
  isFetching: false,
  items: {},
  status: '',
}, action) {
    switch (action.type) {
      case POKEMONS_REQUEST:
        return {
          ...state,
          isFetching: true,
          status: 'request'
        };
      case POKEMONS_RECEIVED:
        return {
          isFetching: false,
          items: {
            data: action.result,
          },
          status: 'receiving'
        };
      case POKEMONS_ERROR:
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


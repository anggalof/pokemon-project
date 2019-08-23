import {
  MOVIES_REQUEST,
  MOVIES_RECEIVED,
  MOVIES_ERROR,
} from './constants';

function reducer(state = {
  isFetching: false,
  items: {},
  status: '',
}, action) {
    switch (action.type) {
      case MOVIES_REQUEST:
        return {
          ...state,
          isFetching: true,
          status: 'request'
        };
      case MOVIES_RECEIVED:
        return {
          isFetching: false,
          items: {
            data: action.result,
          },
          status: 'receiving'
        };
      case MOVIES_ERROR:
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


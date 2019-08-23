import {
  SIMILIAR_REQUEST,
  SIMILIAR_RECEIVED,
  SIMILIAR_ERROR,
} from './constants';

function reducer(state = {
  isFetching: false,
  items: {},
  status: '',
}, action) {
    switch (action.type) {
      case SIMILIAR_REQUEST:
        return {
          ...state,
          isFetching: true,
          status: 'request'
        };
      case SIMILIAR_RECEIVED:
        return {
          isFetching: false,
          items: {
            data: action.result,
          },
          status: 'receiving'
        };
      case SIMILIAR_ERROR:
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


import {
  RECOMMENDATIONS_REQUEST,
  RECOMMENDATIONS_RECEIVED,
  RECOMMENDATIONS_ERROR,
} from './constants';

function reducer(state = {
  isFetching: false,
  items: {},
  status: '',
}, action) {
    switch (action.type) {
      case RECOMMENDATIONS_REQUEST:
        return {
          ...state,
          isFetching: true,
          status: 'request'
        };
      case RECOMMENDATIONS_RECEIVED:
        return {
          isFetching: false,
          items: {
            data: action.result,
          },
          status: 'receiving'
        };
      case RECOMMENDATIONS_ERROR:
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


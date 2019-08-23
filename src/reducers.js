import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import movies from './common/movies/reducer';
import movie from './common/movie/reducer';
import similiar from './common/similiar/reducer';
import recommendations from './common/recommendations/reducer';

const rootReducer = combineReducers({
  movies,
  movie,
  similiar,
  recommendations,
  form: formReducer,
});

export default rootReducer;

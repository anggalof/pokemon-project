import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import pokemons from './ui/common/pokemons/reducer';
import pokemon from './ui/common/pokemon/reducer';

const rootReducer = combineReducers({
  pokemons,
  pokemon,
  form: formReducer,
});

export default rootReducer;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import PokemonDetail from '../../pages/PokemonDetail';
import MyPokemonList from '../../pages/MyPokemonList';

const AppRoutes = (
  <Switch>
  	<Route exact path="/" component={HomePage} />
    <Route path="/pokemon-detail/view/:id" component={PokemonDetail} />
    <Route path="/my-pokemon-list" component={MyPokemonList} />
  </Switch>
);

export default AppRoutes;

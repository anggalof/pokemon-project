import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Movies from '../Movies';
import Movie from '../Movie';

const AppRoutes = (
  <Switch>
  	<Route exact path="/" component={Movies} />
    <Route path="/movie/view/:id-:title" component={Movie} />
  </Switch>
);

export default AppRoutes;

import React from 'react';
import { Route, Switch } from 'react-router';

import { FullMovieContainer, MoviesContainer } from "../containers";
import { NotFound } from '../components';

export const RoutingConfig = () => (
  <Switch>
      <Route path="/" exact component={MoviesContainer} />
      <Route path="/:id" exact component={FullMovieContainer} />

      <Route render={() => <NotFound />} />
  </Switch>
);

import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/repo/:username/:repoName" component={DetailsPage} />
        <Route exact path="/" component={SearchPage} />
      </Switch>
    </Router>
  );
};

export default App;

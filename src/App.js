import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';

const App = () => (
  <Router>
    <Link to={'/'}>Endereços</Link>
    <Switch>
      <Route path={'/'}>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;

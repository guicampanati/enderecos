import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';

const App = () => (
  <Router>
    <Link to={'/'}>Endereços</Link>
    <Switch>
      <Route path={'/criar'}>
        <Create />
      </Route>
      <Route path={'/editar/:id'}>
        <Edit />
      </Route>
      <Route path={'/'}>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;

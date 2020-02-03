import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Delete from './pages/Delete';
import Info from './pages/Info';
import Navigation from './components/Navigation';

const App = () => (
  <Router basename={'/enderecos'}>
    <Container>
      <Navigation />
      <Switch>
        <Route path={'/criar'}>
          <Create />
        </Route>
        <Route path={'/editar/:id'}>
          <Edit />
        </Route>
        <Route path={'/deletar/:id'}>
          <Delete />
        </Route>
        <Route path={'/:id'}>
          <Info />
        </Route>
        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
    </Container>
  </Router>
);

const Container = styled.div`
  min-height: ${props => props.theme.minHeight.screen};
  background-color: ${props => props.theme.color.gray.light};
  color: ${props => props.theme.color.gray.darker};
`;

export default App;

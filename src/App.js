import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import Navigation from './components/Navigation';
import Delete from './components/Delete';
import Info from './components/Info';

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

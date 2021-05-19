import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar'
import Users from './components/DataTable'
import Counter from './components/Counter'

export default function App() {
  return (
    <Router>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/" component={Counter} />
        </Switch>
      </Container>
    </Router>
  );
}
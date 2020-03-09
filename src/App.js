import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './component/Home'
import Header from './component/Header'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

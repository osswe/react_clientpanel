import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/layout/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={ Dashboard } />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

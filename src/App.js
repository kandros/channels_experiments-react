import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import './socket'
import IndexPage from './pages/index'
import CounterPage from './pages/counter'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={IndexPage} />
          <Route path="/counter" exact component={CounterPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';

import './App.css';
import Header from './components/headerView/Header';
import Search from './components/searchView/Search';
import FlightResult from './components/resultView/FlightsResult';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <section className="app__content">
          <Search/>
          <FlightResult/>
        </section>
      </div>
    );
  }
}

export default App;

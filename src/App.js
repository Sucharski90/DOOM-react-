import React, { Component } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
      </div>
    );
  }
}

export default App;

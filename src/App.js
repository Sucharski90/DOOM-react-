import React, { Component } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import './App.css';
import Ogdoom from './Components/Ogdoom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Ogdoom />
      </div>
    );
  }
}

export default App;

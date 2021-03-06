import React, { Component } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import './App.css';
import Ogdoom from './Components/Ogdoom';
import Sidenav from './Components/Sidenav';  
import Weapons from './Components/Weapons';
import Enemies from './Components/Enemies';
import Powerups from './Components/Powerups';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidenav />
        <Hero />
        <Ogdoom />
        <Weapons />
        <Enemies />
        <Powerups />
        <Footer />
        
      </div>
    );
  }
}

export default App;

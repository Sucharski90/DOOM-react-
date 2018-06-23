import React, { Component } from 'react';

      {function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }};
              {function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }};

class Hero extends Component {
  render() {
    return (
      <div className="Hero">
      <h1>Doom 1993</h1>
        <h1>Doom 2016</h1>
        <div id="NavigationContainer">


      <span onClick={openNav}>&#9776; open</span>
     


      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
  </div>
      </div>
    );
  }
}

export default Hero;

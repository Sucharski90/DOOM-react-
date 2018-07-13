import React, { Component } from 'react';
import Options from './Options';
     
class Sidenav extends Component {
  state = {
    isOpen: false,
    options: {
      games: ['test', 'test2', 'test3']
    }
  }
  handleOpen = () => {
    if(this.state.isOpen){
      this.setState({
        isOpen : false
      })
    } else {
      this.setState({
        isOpen : true
      })
    }
  } 
  handleOptionCLick = text => {
    return (
      <Options games={this.state.options[text.toLowerCase()]} />
    )
  }
  showGames = () => {
    console.log('DOOM 3')
  }
  showWeapons = () => {
    console.log('Shotgun')
  }
  showEnemies = () => {
    console.log('Cyber Deamon')
  }
  showPowerUps = () => {
    console.log('Invincibility')
  }
  

  render() {
    if (this.state.isOpen) {
        return (
            <div className="Sidenav">
            <button onClick={this.handleOpen} id="closebtn">&times;</button>

          <div id="mySidenav">
            
            <p onClick={e => this.handleOptionCLick(e.target.innerText)}>Games</p>
            <p onClick={this.showWeapons}>Weapons</p>
            <p onClick={this.showEnemies}>Enemies</p>
            <p onClick={this.showPowerUps}>Power Ups</p>
            
          </div>
            
          </div>
        );
      } else {
        return (
          <div className="Sidenavcl">
            <button onClick={this.handleOpen} >&#9776;</button>
            
          </div>
        );
      }
    }
}
export default Sidenav;

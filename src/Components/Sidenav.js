import React, { Component } from 'react';
     
class Sidenav extends Component {
  state = {
  	isOpen: false,
  }
  handleOpen = () => {
    if(this.state.isOpen===true){
      this.setState({
        isOpen : false
      })
    } else {
      this.setState({
        isOpen : true
      })
    }
  } 
  render() {
    if (this.state.isOpen) {
        return (
            <div className="Sidenav">
            <button onClick={this.handleOpen} id="closebtn">&times;</button>

          <div id="mySidenav">
            <a href="#games">Games</a>
            <a href="#games">Weapons</a>
            <a href="#games">Enemies</a>
            <a href="#games">Power Ups</a>
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

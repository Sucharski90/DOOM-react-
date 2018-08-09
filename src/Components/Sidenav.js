import React, { Component } from 'react';
// import Options from './Options';
     
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
 
  render() {
    if (this.state.isOpen) {
        return (
            <div className="Sidenav">
            <button onClick={this.handleOpen} id="closebtn">&times;</button>

          <div id="mySidenav">
            
            <a href="#original">Story Intro</a>
            <a href="#weapon">Tools</a>
            <a href="#cyber">Enemies</a>
            <a href="#power">Power Ups</a>
            
            
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

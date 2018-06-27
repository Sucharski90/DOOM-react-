import React, { Component } from 'react';
     
class Sidenav extends Component {
  state = {
  	isOpen: false,
  }
  handleOpen = () => {
    if(this.state.isOpen===true){
        console.log('open')
      this.setState({
        isOpen : false
      })
    }else{
        console.log('close')
      this.setState({
        isOpen : true
      })
    }
  } 
  render() {
    if (this.state.isOpen) {
        return (
            <div className="Sidenav">
            <button onClick={this.handleOpen}>&#9776;</button>

          <div id="mySidenav">
              
         <a href="#">About</a>
         <a href="#">Services</a>
         <a href="#">Clients</a>
         <a href="#">Contact</a>
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

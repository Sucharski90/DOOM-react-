import React, { Component } from 'react';
     
class Sidenav extends Component {
  state = {
  	isOpen: false,
  }
  handleOpen = () => {
      //setState should go here
      this.setState({
        this.getElementById('mySidenav').style.width = "250px"
        })
  }
//   handleClose = () => {
//       //setState should go here
//       this.setState({
//         document.querySelector("#mySidenav").style.width = "0px"
//       })
//   }
  render() {
    let isOpen = this.state.isOpen ? ( <Hero /> : '')
    return (
      <div className="Sidenav">
     
      <div id="mySidenav">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
  </div>
      
    );
  }
}
export default Sidenav;
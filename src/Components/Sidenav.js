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
    }else{
      this.setState({
        isOpen : true
      })
    }
  } 


  render() {
    if (this.state.isOpen) {
        return (
            <div className="Sidenav">
            <button onClick={this.handleOpen}>Click Me</button>
         
          <div id="mySidenav">
         {/* <a href="#">About</a>
         <a href="#">Services</a>
         <a href="#">Clients</a>
         <a href="#">Contact</a> */}
       </div>
            
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.handleOpen}>Click Me</button>
          </div>
        );
      }
    }
//    
//       <div id="mySidenav">
//         <a href="#">About</a>
//         <a href="#">Services</a>
//         <a href="#">Clients</a>
//         <a href="#">Contact</a>
//       </div>
//   </div>
      
//     );
//   }
}
export default Sidenav;
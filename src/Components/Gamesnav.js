import React, { Component } from 'react';

class Gamesnav extends Component {
    state = {
        clicked: false,
    }
    handleOpen = () => {
        if(this.state.clicked===true){
          this.setState({
            clicked : false
          })
        } else {
          this.setState({
            clicked : true
          })
        }
      } 

      render() {
        if (this.state.clicked) {
            return (
                <div className="Gamesnav">
                <p>DOOM</p>
                <p>DOOM II</p>       
              </div>
            );
          } else {
            return (
              <div>  
              </div>
            );
          }
        }
}
    export default Gamesnav;
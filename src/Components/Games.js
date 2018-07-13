import React, { Component } from 'react';


class Games extends Component {
  state = {
    clicked: false,
    
}
clicked = () => {
    
        console.log('worked')
     
  } 
  
  render() {
    return (
      <div className="Games">
        <h1>hi</h1>
        <button onClick={this.clicked}>DOOM</button>
        
      </div>
    );
  }
}
    export default Games;
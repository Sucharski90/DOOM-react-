import React, { Component } from 'react';

class Games extends Component {
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
                <div className="Games">
                <button onClick={this.handleOpen} id="closebtn">&times;</button>
                <h1>DOOM 1993</h1>
                <h1>DOOM 2016</h1>
           </div>
            );
          } 
        }
    }
    export default Games;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }

    // this.handleInput = this.handleInput.bind(this)
  }



  render() {
    return (
      <div className="App">
        <h1> { this.state.input } </h1>
        <Form />
        
        
        {/* <button onClick={  }></button> */}
        
      </div>
    );
  }
}

export default App;

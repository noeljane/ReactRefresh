import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
        <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
        </div>
          <div class="box" id="red">box</div>
        <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
        </div>
          <div class="box"id="green">box</div>
          <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
        </div>
          <div class="box" id="blue">box</div>
        </div>
        
      </div>
    );
  }
}

export default App;

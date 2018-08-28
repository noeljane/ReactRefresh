import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
    state = {
        
    }
    
    render(){
        return (
        <div class="container">
            <div class="box square">This is the target square</div>
            <div class="slidecontainer">
            <input type="range" min="1" max="100"  class="slider" id="myRange"/>
            </div>
            <div class="box" id="red">box</div>
            <div class="slidecontainer">
            <input type="range" min="1" max="100"  class="slider" id="myRange"/>
            </div>
            <div class="box"id="green">box</div>
            <div class="slidecontainer">
            <input type="range" min="1" max="100"  class="slider" id="myRange"/>
            </div>
            <div class="box" id="blue">box</div>
        </div> 
        )
    }
}

export default Slider;
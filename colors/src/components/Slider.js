import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
    state = {
        red: 0,
        green: 0,
        blue: 0,
        divStyle: {
            color:this.red,
        }
        
    }
    
    render(){
        console.log("printing state")
        console.log(this.state.divStyle)
        return (
        <div className="container">
            <div className="box square">This is the target square</div>
            <div className="slidecontainer">
            <input type="range" min="1" max="100"  className="slider" id="myRange"/>
            </div>
            <div className="box" id="red">box</div>
            <div className="slidecontainer">
            <input type="range" min="1" max="100"  className="slider" id="myRange"/>
            </div>
            <div className="box"id="green">box</div>
            <div className="slidecontainer">
            <input type="range" min="1" max="100"  className="slider" id="myRange"/>
            </div>
            <div className="box" id="blue">box</div>
        </div> 
        )
    }
}

export default Slider;
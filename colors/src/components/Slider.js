import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
    state = {
        red: 0,
        green: 0,
        blue: 0,
        backgroundColor:`rgb(${this.red, this.green, this.blue}`
        
        
    }

    changeValue (evt) {
        evt.preventDefault();
        console.log(evt.target.value)
        console.log("I'm running changeValue function.")
    };
    
    render(){
        console.log("printing state")
        console.log(this.state.backgroundColor)
        return (
        <div className="container">
            <div className="box square" style={this.state.divStyle}>This is the target square</div>
            <div className="bottomContainer">
                
                <div className="slidecontainer">
                    <input type="range" min="0" max="255"  className="slider" id="myRange" onChange={this.changeValue.bind(this)}/>
                    <div className="box" id="red">box</div>
                </div>
                
                <div className="slidecontainer">
                    <input type="range" min="0" max="255"  className="slider" id="myRange" onChange={this.changeValue.bind(this)}/>
                    <div className="box"id="green">box</div>
                </div>
                
                <div className="slidecontainer">
                    <input type="range" min="1" max="255"  className="slider" id="myRange" onChange={this.changeValue.bind(this)}/>
                    <div className="box" id="blue">box</div>
                </div>
                
            </div> 
        </div>
        )
    }
}

export default Slider;
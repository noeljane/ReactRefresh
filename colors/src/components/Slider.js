import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
    constructor(props){
        super(props)
        this.state = {
            red: 0,
            green: 0,
            blue: 0,      
        }
    }
    
    changeValueRed (evt) {
        evt.preventDefault();
        this.setState ({
            red: evt.target.value
        })

    };

    changeValueGreen(evt){
        evt.preventDefault();
        this.setState ({
            green: evt.target.value   
        })
    }

    changeValueBlue(evt){
        evt.preventDefault();
        this.setState ({
            blue: evt.target.value   
        })
    }
    
    render(){
        const style = {
            background: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue}`
        }
        return (
        <div className="container">
            <div className="box square" style={style}>This is the target square</div>
            <div className="bottomContainer">
                
                <div className="slidecontainer">
                    <input type="range" min="0" max="255"  className="slider" id="myRange" onChange={this.changeValueRed.bind(this)}/>
                    <div className="box" id="red">box</div>
                </div>
                
                <div className="slidecontainer">
                    <input type="range" min="0" max="255"  className="slider" id="myRange" onChange={this.changeValueGreen.bind(this)}/> 
                    <div className="box"id="green">box</div>
                </div>
                
                <div className="slidecontainer">
                    <input type="range" min="1" max="255"  className="slider" id="myRange" onChange={this.changeValueBlue.bind(this)}/>
                    <div className="box" id="blue">box</div>
                </div>
                
            </div> 
        </div>
        )
    }
}

export default Slider;
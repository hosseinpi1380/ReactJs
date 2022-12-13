
import React, { Component } from 'react'
import './temp.css'
export default class Temp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temp: 26, tempClass: "cold"
        }
        this.addTemp = this.addTemp.bind(this)
        this.redTem = this.redTem.bind(this)
    }
    addTemp() {
        if(this.state.temp >30){
            return false
        }
        this.setState(pre=>{
            return {temp:pre.temp + 1}
        })
        if(this.state.temp>=15){
            this.setState({
                tempClass:'hot'
            })
        }
    }
    redTem(){
        if (this.state.temp < 0) {
            return false
        }
        this.setState(pre => {
            return {temp :pre.temp - 1}
        })
        if(this.state.temp<15){
            this.setState({tempClass:'cold'})
        }
    }

    render() {
        return (
            <div className="container">
                <div className={`display ${this.state.tempClass}`} >
                    <h1>{this.state.temp}°C</h1>
                </div>
                <div className="buttons">
                    <button className="add" onClick={this.addTemp}>+</button>
                    <button className="reduce" onClick={this.redTem}>-</button>
                </div>
            </div>
        )
    }
}






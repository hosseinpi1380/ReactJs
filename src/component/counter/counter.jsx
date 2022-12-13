import React from 'react'
import './counter.css'
export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        // this.AddFunc = this.AddFunc.bind(this)
        // this.ReduceFunc = this.ReduceFunc.bind(this)
    }
    AddFunc = function () {
        this.setState(prev => {
            return { counter: prev.counter + 1 }
        })
    }
    ReduceFunc = function () {
        this.setState(prev => {
            return { counter: prev.counter - 1 }
        })
    }
    render() {
        return (
            <div className="container">
                <div className="counter">
                    <h1 className="title">Counter</h1>
                    <h4 className='value'>{this.state.counter}</h4>
                </div>
                <div className="buttons">
                    <button onClick={()=>this.AddFunc()}>Add Count</button>
                    <button onClick={()=>this.ReduceFunc()}>lower count</button>
                </div>
            </div>
        )
    }
}


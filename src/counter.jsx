import React, { Component } from 'react'
export default class Counter extends Component {
    constructor(props) {
        console.log('counter.jsx=>constructor')
        super(props)
        this.state = {
            counter: 0
        }
        this.inceament = () => this.setState({ counter: this.state.counter + 1 })
        this.decreament = () => this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        console.log('counter.jsx=>render')
        return (
            <div>
                <button onClick={this.inceament}>increament</button>
                <button onClick={this.decreament}>decrement</button>
                <h1>counter {this.state.counter}</h1>
            </div>
        )
    }
    componentWillUnmount() {
        console.log('component will unmount')
    }
}


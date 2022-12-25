import React, { Component } from 'react'
import Counter from './counter'
export default class App extends Component {
  constructor(){
    super()
    console.log('constructor.app')
    this.state={
      name:'hossein'
    }
  }

  render() {
    return (
      <div>
        <Counter/>
      </div>
    )
  }
  
}





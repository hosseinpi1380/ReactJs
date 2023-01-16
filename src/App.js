import React, { Component } from 'react'

import {bootstrapc}
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
        <h1>hello</h1>
      </div>
    )
  }
  
}





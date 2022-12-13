import React, { Component } from 'react'
import './note-app.css'

export default class Task extends Component {
  render() {
    
    return (
      <div className='task' style={{backgroundColor:this.props.color}}>
        <h4>{this.props.name}</h4>
      </div>
    )
  }
}

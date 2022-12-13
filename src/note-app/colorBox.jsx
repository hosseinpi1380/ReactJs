import React, { Component } from 'react'
import './note-app.css'
export default class ColorBox extends Component {
  constructor(props) {
    super(props)
  }
  colorSetHandler(selectedColor) {
    this.props.onColor(selectedColor)
  }
  render() {
    return (
      <div className='color' style={{ backgroundColor: this.props.color }}
        onClick={this.colorSetHandler.bind(this,this.props.color)}>

      </div>
    )
  }
}

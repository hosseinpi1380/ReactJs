import React, { Component } from 'react'
import Example from './example'
import "./style/App.css"
import NavBarExample from './bootstrapComponent/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class sampleWeb extends Component {
  render() {
    return (
      <>
            <NavBarExample />
            <Example />
      </>
    )
  }
}

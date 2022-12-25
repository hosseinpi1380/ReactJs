import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
// import NoteApp from '../note-app/note-app'
// import ModalComponent from './modal'
// import NavBar from './navbar'
// import ImgCompenent from './img'
// import CardComponent from './Card'
// import FormComponent from './form'
// import { AiFillHome } from 'react-icons/ai'
export default class BootReact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: null,
      fname: 'hossein', city: 'iran', country: 'tehran'
    }
    console.log('reactBootstrap.jsx => constructor')
  }
  componentDidMount() {
    console.log('reactbootstrap.jsx=> componentDidMount')
  }
  static getDerivedStateFromProps() {
    console.log('reactBootstrap.jsx => get derived state from proops')
  }
  render() {
    console.log('reactbootstrap.jsx=> render')
    return (
      <Container>

      </Container>
    )
  }
}

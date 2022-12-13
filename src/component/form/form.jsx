
import './form.css'
import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstNameData: '',
      LastNameData: '',
      submitted: false,
      allValid: false,
      emailData: ''
    }
  }
  firstChange(event) {
    this.setState({
      firstNameData: event.target.value
    })
  }
  LastChange(event) {
    this.setState({
      LastNameData: event.target.value
    })
  }
  emailChange(event) {
    this.setState({
      emailData: event.target.value
    })
  }
  submitHandler(event) {
    event.preventDefault();
    this.setState({
      submitted: true
    })
    if (this.state.firstNameData.length !== 0 && this.state.LastNameData.length !== 0
      && this.state.emailData.length !== 0) {
      this.setState({
        allValid: true
      })
      setTimeout(() => {
        this.setState({
          allValid: false
        })
      }, 3000)
    }
  }
  render() {
    return (

      <div className='container'>
        <form onSubmit={(event) => this.submitHandler(event)}>
        {this.state.allValid &&(
          <p>
          success! thanks you for registering.
        </p>
        )}
          <div className="firstname">
            <input type="text" placeholder='FirstName' onChange={(event) => this.firstChange(event)} />
            {this.state.submitted && this.state.firstNameData.length === 0 && (
              <span>Please enter an email address</span>
            )}
          </div>

          <div className="lastname">
            <input type="text" placeholder='LastName' onChange={(event) => this.LastChange(event)} />
            {this.state.submitted && this.state.LastNameData.length === 0 && (
              <span>Please enter an email address</span>
            )}
          </div>

          <div className="email">
            <input type="text" placeholder='Email' onChange={(event) => this.emailChange(event)} />
            {this.state.submitted && this.state.emailData.length === 0 && (
              <span>Please enter an email address</span>
            )}
          </div>

          <input type="submit" value="REGISTER" onSubmit={() => this.submitHandler()} />
        </form>
      </div>
    )
  }
}

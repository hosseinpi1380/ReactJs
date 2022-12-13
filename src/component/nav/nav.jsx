
import React from 'react'
import './nav.css'
export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nofication: [
        'اطلاعیه شماره 1',
        'اطلاعیه شماره 2',
        'اطلاعیه شماره 3',
        'اطلاعیه شماره 4',
        'اطلاعیه شماره 5',
        'اطلاعیه شماره 5'
      ]
    }

  }

  render() {
    console.log(this.state.nofication.length)

    return (
      <div className='wrapper'>
        <div className="container">
          <h1>Hello World</h1>
          
            {this.state.nofication.length > 0 && (<h3>News 
            <sup>{this.state.nofication.length}</sup>
            </h3>)}
            
          

        </div>
      </div>
    )


  }
}



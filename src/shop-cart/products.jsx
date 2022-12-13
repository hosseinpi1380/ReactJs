import React, { Component } from 'react'
import './shop.css'
export default class Products extends Component {
  constructor(props) {
    super(props)
    this.clickHanlder=this.clickHanlder.bind(this)
  }
  clickHanlder(userid){
    this.props.AddBasket(userid)
  }
  render() {
    return (
      <div className='product'>
        <h2>{this.props.name}</h2>
        <img src={this.props.src} alt="" />

        <div className="info">
          <h3>{this.props.price}</h3>
          <button onClick={()=>this.clickHanlder(this.props.id)}>Add To Cart</button>
        </div>
      </div>
    )
  }
}

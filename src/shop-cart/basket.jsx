import React, { Component } from 'react'
import './shop.css'
export default class Basket extends Component {
    constructor(props) {
        super(props)
    }
    removeProduct(id) {
        this.props.removeOpt(id)
    }
    render() {
        return (
            <div className="product_basket">
                <h2 >{this.props.name}</h2>
                <h2 >{this.props.price}</h2>
                <button onClick={() => this.removeProduct(this.props.id)}>remove</button>
            </div>
        )
    }
}

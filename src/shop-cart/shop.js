import React, { Component } from 'react'
import Products from './products'
import Basket from './basket'
import Footer from './footer'
import Header from './header'
export default class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products:
        [
          { id: 1, name: 'title1', src: '../img/animal1.jpg', price: '22 $' },
          { id: 2, name: 'title2', src: '', price: '23$' },
          { id: 3, name: 'title3', src: '', price: '24$' },
          { id: 4, name: 'title4', src: '', price: '25$' },
        ],
      shoppingCart: []
    }
    this.addToCartHandler = this.addToCartHandler.bind(this)
    this.removeBasket = this.removeBasket.bind(this)
    // this.removeProductFromCart = this.removeProductFromCart.bind(this)
  }
  addToCartHandler(id) {
    let clickedProduct = this.state.products.find(product => {
      return product.id === id
    })
    this.setState({
      shoppingCart: [...this.state.shoppingCart, clickedProduct]
    })
  }
  removeBasket(id){
    let removeItem = this.state.shoppingCart.find(product => {
      return product.id === id
    })
    this.state.shoppingCart.splice(removeItem,1)
    console.log(this.state.shoppingCart)
    this.setState({
      shoppingCart:[...this.state.shoppingCart]
    })

  }
  render() {
    return (
      <div className='container'>
      <Header/>
        <div className="products">
          {this.state.products.map(product => (
            <Products {...product} key={product.id} AddBasket={this.addToCartHandler} />
          ))}
        </div>

        <div className="basketTitle">
          <h2>items</h2>
          <h2>price</h2>
          <h2>doing</h2>
        </div>

        <div className="basket">
            {this.state.shoppingCart.map(add => (<Basket {...add} key={add.id} removeOpt={this.removeBasket} />)
            )}
        </div>
            
          <Footer/>
      </div>
    )
  }
}

import React ,{ Component } from 'react'; 
import './shoppingCart.css';
import {Link} from 'react-router-dom';
import CartItem from './cart-item/cart-item';
import {connect} from 'react-redux';
// import * as actions from '../../../../store/actions/index';

class ShoppingCart extends Component{

  state ={
    cartVisible:false,
  }
  
  render(){

    const cartItems = this.props.cartItems.map(item =>{
      return(
          <CartItem item={item} key={item.product.id} />
      )
    })


    const  toggleCart = ()=>{
      this.setState(prevState => ({
        cartVisible: !prevState.cartVisible,
      }))
    }
    
    return(
      
      <li className='shoppingCart' >
        <i className="fas fa-shopping-cart mr-1" onClick={toggleCart}>
          <span className="cart-count" >{this.props.cartItems.length}</span></i>
          <span onClick={toggleCart}>Cart</span> 
        <ul className={'cart-items '+(this.state.cartVisible ? '' : 'invisible' )}>
          {cartItems}
            <li>Total: $ {this.props.cart_total} </li>
          <li className='close-cart'><Link to="/checkout">Proceed to checkout</Link></li>
          <li className='close-cart'><Link to="/cart">Go to cart</Link></li>
          <li className='close-cart' onClick={toggleCart}>Close Cart</li>
        </ul>
      </li>
      
    )
  }
}

const mapStateToProps = state =>{
  return{
    authenticated:state.auth.athenticated,
    cartItems:state.cart.cartItems,
    cart_total:state.cart.cart_total,
  }
}



export default connect(mapStateToProps)(ShoppingCart);
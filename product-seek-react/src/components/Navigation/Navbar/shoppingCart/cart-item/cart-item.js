import React ,{ Component } from 'react'; 
import './cart-item.css';
import * as config from '../../../../../baseURL';


class CartItem extends Component{
  render(){
    return(
      <li className="cart-item">
        <div className="product">
          <div className='cart-image'>
            <img src={config.BaseURL + (this.props.item.product.product_image[0])} alt=""/>
          </div>
          <div className="item-details">
            <h6>{this.props.item.product.title}</h6>
            <p className='price'><span>Price</span>$ {this.props.item.product.price}</p>
          </div>
        </div>
      </li>
    )
  }
}

export default CartItem;
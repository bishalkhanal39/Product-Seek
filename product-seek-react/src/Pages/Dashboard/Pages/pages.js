import React from 'react';
import {Route} from 'react-router-dom'
import Cart from '../../Cart/Cart';
import wishlist from '../../Wishlist/wishlist';
import Order from '../components/order/order';
import Delivered from '../components/delivered/delivered';
const pages =  ()=> {
  return(
    <div>
      <Route path='/dashboard/cart' component={Cart} />
      <Route path='/dashboard/wishlist' component={wishlist} />
      <Route path='/dashboard/orders' component={Order} />
      <Route path='/dashboard/delivered' component={Delivered} />
    </div>
  )
}

export default pages;
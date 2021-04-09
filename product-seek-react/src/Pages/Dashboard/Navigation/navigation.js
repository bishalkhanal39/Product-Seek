import React , {Component} from 'react';
import  {Link} from 'react-router-dom';
import './navigation.css';

class DashboardNav extends Component{

  render(){

    return(
      <ul className='dashboard-menu'>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/dashboard/cart'>Cart</Link></li>
        <li><Link to='/dashboard/wishlist'>Wishlist</Link></li>
        <li><Link to='/dashboard/orders'>Orders</Link></li>
        <li><Link to='/dashboard/delivered'>Delivered</Link></li>
        <li><Link to='/dashboard/profile-setting'>Profile Setting</Link></li>
      </ul>
    )

  }

} 

export default DashboardNav;
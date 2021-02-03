import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Logo from './logo/logo';
import ShoppingCart from './shoppingCart/shoppingCart';
import Wishlist from './Wishlist/Wishlist';
import {connect} from 'react-redux';
import * as actionTypes from '../../../store/actions/actionType';
import Swal from 'sweetalert2';
// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   onOpen: (toast) => {
//     toast.addEventListener('mouseenter', Swal.stopTimer)
//     toast.addEventListener('mouseleave', Swal.resumeTimer)
//   }
// })

class  Navbar extends Component{
  render(){

    // logout function
    const logout =()=>{
      Swal.fire({
        title: 'Are you sure?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#08080vc g 8',
        cancelButtonColor: '#bcbcbc',
        confirmButtonText: 'Yes, logout !'
      }).then((result) => {
        if (result.isConfirmed) {
          
          this.props.emptyWishlist();
          this.props.emptyCart()
          this.props.logout();
          Swal.fire({
            icon: 'success',
            title: 'You have been logged out'
          })
        }
      })
      
    }

    return(
      <nav>
        <div className="row"> 
        <Logo/>
          <ul className="nav">
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/store">Store</Link> </li>
            <li><Link to="/shop">Shop</Link> </li>
            <li><Link to="/contact">Contact</Link> </li>
          </ul>

          { this.props.authenticated ?
          <ul className="nav ml-auto">
            <li><Link to="/dashboard"><i className="far fa-user mr-1"></i>{this.props.user.name}</Link></li>
            <li><a onClick={logout} className='anchor-btn'><i className="fa fa-power-off mr-1"></i>Logout</a></li>
            <ShoppingCart/>
            <Wishlist/>
            </ul> : 
            <ul className="nav ml-auto">
              <li><a href="#" data-toggle="modal" data-target="#Login-model"> <i className="fa fa-user mr-1"></i> Login</a> </li>
              <li><a  href="#" data-toggle="modal" data-target="#signup-modal"><i className="far fa-gem mr-1"></i> Sign up</a> </li>
            </ul>
        }
         
        </div>
        
      </nav> 
      
    );
  }
  
}

const mapDispatchToProps = dispatch=>{
  return{
    logout:()=>dispatch({type:actionTypes.AUTH_LOGOUT}),
    emptyWishlist:()=>dispatch({type:actionTypes.EMPTY_WISHLIST}),
    emptyCart:()=>dispatch({type:actionTypes.CLEAR_CART})
  }
}

const mapStateToProps= state=>{
  return{
    authenticated:state.auth.authenticated,
    user:state.auth.user
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
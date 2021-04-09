import React ,{ Component } from 'react'; 
import '../shoppingCart/shoppingCart.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Wishlist extends Component{

  
  render(){
    return(
      <li className='shoppingCart' >
        <Link to='/wishlist'>
          <i className="fas fa-heart mr-1">
          <span className="cart-count" >{this.props.wishlist.length}</span></i>Wishlist
        </Link>
      </li>
    )
  }
}
const mapStateToProps = state =>{
  return {
    wishlist:state.wishlist.wishlist,
  }
}


export default connect(mapStateToProps)(Wishlist);
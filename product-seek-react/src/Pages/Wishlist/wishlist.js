import React,{Component} from 'react';
import {connect} from 'react-redux';
import './wishlist.css';
import ProductList from './productList';
import * as action from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionType';

class Wishlist extends Component{
  render(){
    return(
      <div className="container pt-4 pb-4">
        <div className="row ">
          <div className="col-md-12">
          <div className="card ">
                <div className="card-header">
                  <h5 className="text-center">WISHLIST</h5>
                </div>
                <div className="card-body table-responsive">
                <table className="table ">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Category</th>
                      <th scope="col">Store</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.wishlist.length?
                      this.props.wishlist.map(w=>(
                        <ProductList 
                        product={w.product} 
                        key={w.id} 
                        loading={this.props.loading}
                        clicked={()=>{
                          this.props.load()
                          this.props.removefromWishlist(w.id,this.props.user.id)
                        }}/>
                        ))
                      :
                      <tr>
                        <td colSpan="6" className="text-center"> Sorry Your wishlist is empty !!</td>
                      </tr>
                    }
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
            
      </div>
    </div>
    )
  }
}

const mapStateToProps= state=>{
  return{
    wishlist:state.wishlist.wishlist,
    user:state.auth.user,
    loading:state.wishlist.loading
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    load:()=>dispatch({type:actionTypes.WISHLIST_FETCH_START}),
    removefromWishlist:(wishlistId,userID)=>dispatch(action.REMOVE_FROM_WISHLIST(wishlistId,userID))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Wishlist);
import React,{Component} from 'react';
import {connect} from 'react-redux';
import './cart.css';
import * as actions from '../../store/actions/index';
import * as config from '../../baseURL';
import Swal from 'sweetalert2';

class Cart extends Component{
  render(){
    const removefromcart=(productID)=>{
      Swal.fire({
        title: 'Are you sure?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#080808',
        cancelButtonColor: '#bcbcbc',
        confirmButtonText: 'Yes, remove !'
      }).then((result) => {
        if (result.isConfirmed) {
          
          this.props.removeItem(productID);
        }
      })
    }
    return(
      <div className="container pt-4 pb-4">
        <div className="row">

          <div className="col-md-12">
            <div className="card ">
              <div className="card-header">
                <h5 className="text-center">Cart</h5>
              </div>
              <div className="card-body table-responsive">
                <table className="table table-bordered">

                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>

                  
                    {this.props.cartItems.length?
                    <tbody>{
                    this.props.cartItems.map(item=>{
                      return(
                        <tr key={item.product.id}>
                          <td className="display-flex-justify-center">
                            <div className="cart-image">
                             <img src={config.BaseURL+(item.product.product_image[0])} alt=""/>
                            </div>
                          </td>
                          <td>
                            {item.product.title}
                          </td>
                          <td>
                            $ {item.product.price}
                          </td>
                          <td>
                            <i className="fas fa-minus mr-1" onClick={()=>{
                              this.props.decreaseQuantity(item.product.id)
                            }}></i>
                            {item.quantity}
                            <i className="fas fa-plus ml-1" onClick={()=>{
                              this.props.increaseQuantity(item.product.id)
                            }}></i>
                          </td>
                          <td>$ {item.total} </td>
                          <td>
                            <button className="btn btn-danger remove" onClick={
                              ()=>{
                               removefromcart(item.product.id)
                              }
                            }>
                              <i className='fas fa-times mr-1'></i>Remove
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                    <tr>
                      <th scope="col" colSpan="4" className="text-center">Total amount</th>
                      <th scope="col" colSpan="2">$ {this.props.cart_total}</th>
                    </tr>
                    </tbody>
                    :
                    <tbody>
                      <tr>
                        <td colSpan='6' className="text-center"> Your Cart is empty !!</td>
                      </tr>
                      </tbody>
                    }
                      
                  

                </table>
              </div>
            </div>
          </div>

         </div>
      </div>
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

const mapDispatchToProps = dispatch =>{
  return{
    increaseQuantity:(productID)=>dispatch(actions.increaseQuantity(productID)),
    decreaseQuantity:(productID)=>dispatch(actions.decreaseQuantity(productID)),
    removeItem:(productID)=>dispatch(actions.removeCart(productID)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
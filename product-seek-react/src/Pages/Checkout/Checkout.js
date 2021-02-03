import axios from '../../axios';
import React , {Component} from 'react';
import {connect} from 'react-redux';
import '../Cart/cart.css';
import * as actionTypes from '../../store/actions/actionType';
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
}) 

class Checkout extends Component {
  state = {
    loading:false
  }

  render(){

    const order = ()=>{
      this.setState({
        loading:true,
      })
     this.props.cart.map(item =>{
       item.product_id=item.product.id
        item.total_price=item.product.price * item.quantity
      })
      const formData = {
        products:JSON.stringify(this.props.cart),
        user_id:this.props.user.id
      }

      axios.post('/order/add',formData).then(()=>{
        Toast.fire({
          icon: 'success',
          title: 'Order made Successfully'
        })
        this.props.emptyCart()
        this.setState({
          loading:false,
        })
      })
      
    }
    return(
      <div className='container pt-4'>
        <div className='row'>

          <div className='col-md-12'>
            <div className="card ">
              <div className="card-header">
                <h5 className="text-center">Checkout</h5>
              </div>
              <div className="card-body table-responsive">
                <table className="table table-bordered">

                  <thead className="thead-dark">
                    <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    </tr>
                  </thead> 
                  <tbody>
                    {this.props.cart.length ?
                      this.props.cart.map(item =>{
                        return(
                          <tr key={item.product.id}>
                            <td>{item.product.title}</td>
                            <td>$ {item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>$ {item.product.price * item.quantity }</td>
                          </tr>
                        )
                      }
                      )
                      :(
                        <tr>
                          <td colSpan='4'>Sorry Your cart is empty !!</td>
                        </tr>
                      )
                    }
                    <tr>
                      <td colSpan='3'>Total</td>
                      <td>$ {this.props.cart_total}</td>
                    </tr>

                  </tbody> 
                </table>
                </div>
              <div className='card-footer'>
                {this.state.loading? 
                <div className="spinner-border float-right" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                :
                <button onClick = {order} className='btn btn-dark float-right' disabled={this.props.cart.length? false : true }>Order</button>
                }
                
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
    authenticated:state.auth.authenticated,
    cart : state.cart.cartItems,
    cart_total:state.cart.cart_total,
    user:state.auth.user
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    emptyCart:()=>dispatch({type:actionTypes.CLEAR_CART})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);
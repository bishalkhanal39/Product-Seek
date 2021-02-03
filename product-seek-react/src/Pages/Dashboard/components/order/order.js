import React,{Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index'
import * as config from '../../../../baseURL';
import axios from '../../../../axios';
import Swal from 'sweetalert2';


class Order extends Component{
  state={
    loading:false,
  }
  componentDidMount(){
    this.props.loadOrders(this.props.user.id);
  }

  render(){

    const cancle = (id)=>{

      this.setState({
        loading:true
      })

       Swal.fire({
        title: 'Are you sure?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#080808',
        cancelButtonColor: '#bcbcbc',
        confirmButtonText: 'Yes, logout !'
      }).then((result) => {
        if (result.isConfirmed) {
          
          axios.get('/order/cancle/'+id).then(()=>{
            this.props.loadOrders(this.props.user.id);

            this.setState({
              loading:false
            })

            Swal.fire({
              icon: 'success',
              title: 'order has been cancled'
            })
          })
        
        }
      })

    }

    return(
      <div className="container pt-4 pb-4">
        <div className="row ">
          <div className="col-md-12">
            <div className="card ">
              <div className="card-header">
                <h5 className="text-center">Orders</h5>
              </div>
              <div className="card-body table-responsive">
                <table className="table ">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Order no</th>
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.orders.length?
                      this.props.orders.map(order =>{
                        return(
                          <tr key={order.id}>
                            <td>{order.order_no}</td>
                            <td className='wishlist-image'><img src={ config.BaseURL + (order.products.product_image[0])} alt=""/></td>
                            <td>{order.products.title}</td>
                            <td>${order.products.price}</td>
                            <td>{order.quantity}</td>
                            <td>${order.total}</td>
                            <td>{order.status}</td>
                            <td>
                            {order.status!=='Canceled'?
                              <button className='btn btn-danger' disable={this.state.loading? true : false} onClick={()=>cancle(order.id)}>Cancle</button>:
                              ""
                            }
                            </td>
                          </tr>
                        )
                      })
                      : 
                      <tr>
                      <td colSpan='7'>Sorry no orders have been made or everthing has been delivered!!</td>
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

const mapStateToProps = state =>{
  return{
    authenticated:state.auth.authenticated,
    user:state.auth.user,
    orders:state.order.orders
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    loadOrders:(userId)=>dispatch(actions.ORDER(userId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Order);
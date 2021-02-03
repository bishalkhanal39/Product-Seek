import React,{Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index'
import * as config from '../../../../baseURL';
import axios from '../../../../axios';
import Swal from 'sweetalert2';
import Modal from '../../../../components/UI/Modal/Modal';
import Input from '../../../../components/UI/Input/Input';
import jQuery from 'jquery';

class Delivered extends Component{
  componentDidMount(){
    this.props.loadOrders(this.props.user.id);
  }



  state={
    loading:false,
    formReturn:{
       Note:{
        elementType:'input',
        elementConfig:{
          type:'text',
        },
        value:''
      },
    },
    formReview:{
       Review:{
        elementType:'input',
        elementConfig:{
          type:'text',
        },
        value:''
      },
    },
    currentReturnedOrderId:null,
    currentReviewProductId:null,
  }

  render(){

    const formElementArray=[];
    for(let key in this.state.formReturn){
      formElementArray.push({
        name:key,
        config:this.state.formReturn[key]
      })
    }

   const formReviewElementArray=[];
    for(let key in this.state.formReview){
      formReviewElementArray.push({
        name:key,
        config:this.state.formReview[key]
      })
    }

     const inputChangedHandler= (event,inputIdentifier)=>{
      const updatedForm = {
        ...this.state.formReturn
      }

      const updatedFormElement = {
        ...updatedForm[inputIdentifier]
      }

      updatedFormElement.value = event.target.value;

      updatedForm[inputIdentifier]=updatedFormElement;
      this.setState({
        formReturn : updatedForm
      })

    }

    const inputChangedHandlerReview= (event,inputIdentifier)=>{
      const updatedForm = {
        ...this.state.formReview
      }

      const updatedFormElement = {
        ...updatedForm[inputIdentifier]
      }

      updatedFormElement.value = event.target.value;

      updatedForm[inputIdentifier]=updatedFormElement;
      this.setState({
        formReview : updatedForm
      })

    }

    const openReturnModal= (id)=>{
      this.setState({
        currentReturnedOrderId:id
      })

      jQuery('#returnOrder-model').modal('show')

    }

     const openReviewModal= (id)=>{
      this.setState({
        currentReviewProductId:id
      })

      jQuery('#review-model').modal('show')

    }


    const returnOrder =  (event) =>{
      event.preventDefault();
      this.setState({
        loading:true
      })

      const formData = {
        return_note:this.state.formReturn.Note.value
      }

      axios.put('/order/return-request/'+this.state.currentReturnedOrderId,formData).then(()=>{
        Swal.fire({
          icon: 'success',
          title: 'Requested for return'
        })
        this.setState({
          loading:false
        })
        this.props.loadOrders(this.props.user.id);
        jQuery('#returnOrder-model').modal('hide')
      })
    }

    const review =  (event) =>{
      event.preventDefault();
      this.setState({
        loading:true
      })

      const formData = {
        review:this.state.formReview.Review.value,
        user_id:this.props.user.id,
        product_id:this.state.currentReviewProductId
      }

      axios.post('/review/',formData).then(()=>{
        Swal.fire({
          icon: 'success',
          title: 'Review posted successfully'
        })
        this.setState({
          loading:false
        })
        this.props.loadOrders(this.props.user.id);
        jQuery('#review-model').modal('hide')
      })
    }


    const returnForm = (
      <div>
        <form onSubmit={returnOrder}>
        {formElementArray.map(element=>(
          <Input key={element.name} name={element.name} 
          elementType={element.config.elementType} 
          elementConfig={element.config.elementConfig}
          value={element.config.value}
          changed={(event)=>inputChangedHandler(event,element.name)}
          />
        ))}
        <div className='form-group'>
          {this.state.loading?
            <div className="spinner-border text-success" role="status">
              <span className="sr-only">Loading...</span>
            </div>:
            
            <button type="submit" className='btn btn-primary'>Submit</button>
          }
        </div>
        </form>
      </div>
    );

     const reviewForm = (
      <div>
        <form onSubmit={review}>
        {formReviewElementArray.map(element=>(
          <Input key={element.name} name={element.name} 
          elementType={element.config.elementType} 
          elementConfig={element.config.elementConfig}
          value={element.config.value}
          changed={(event)=>inputChangedHandlerReview(event,element.name)}
          />
        ))}
        <div className='form-group'>
        {this.state.loading?
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>:
          
          <button type="submit" className='btn btn-primary'>Submit</button>
        }
          
        </div>
        </form>
      </div>
    );


  
    return(
      <div className="container pt-4 pb-4">
        <div className="row ">
          <div className="col-md-12">
            <div className="card ">
              <div className="card-header">
                <h5 className="text-center">Delivered</h5>
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
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.delivered.length?
                      this.props.delivered.map(order =>{
                        return(
                          <tr key={order.id}>
                            <td>{order.order_no}</td>
                            <td className='wishlist-image'><img src={ config.BaseURL + (order.products.product_image[0])} alt=""/></td>
                            <td>{order.products.title}</td>
                            <td>$ {order.products.price}</td>
                            <td>{order.quantity}</td>
                            <td>$ {order.total}</td>
                            <td>{order.status}{order.return_request? "(requested for return)":''}</td>
                            <td>
                            {order.returnable?
                              order.return_request?
                              "":<button className='btn btn-danger mb-1' onClick={()=>{openReturnModal(order.id)}}>Return</button>
                              :""
                            }
                              <button className='btn btn-primary mr-1' onClick={()=>{openReviewModal(order.products.id)}}>Review</button>

                            </td>
                          </tr>
                        )
                      })
                      : 
                      <tr>
                      <td colSpan='7'>Sorry no orders have been made!!</td>
                      </tr>
                    }
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

          <Modal modelName='returnOrder-model'>
            <div className="login">
              <h6>Write a reason for your return!</h6>
              {returnForm}
            </div>
          </Modal>

          <Modal modelName='review-model'>
            <div className="login">
              <h6>Write a review of the product</h6>
              {reviewForm}
            </div>
          </Modal>
          
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    authenticated:state.auth.authenticated,
    user:state.auth.user,
    delivered:state.order.delivered
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    loadOrders:(userId)=>dispatch(actions.ORDER(userId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Delivered);
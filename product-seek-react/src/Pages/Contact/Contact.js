// import Axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Component } from 'react';
import React, { Component } from 'react';
// import Axios from 'axios';
import axios from '../../axios';
// import { connect } from 'react-redux';
// import Modal from '../../components/UI/Modal/Modal';
// import Input from '../../components/UI/Input/Input';
// import * as actions from '../../../store/actions/auth';
// import jQuery from 'jquery';

class Contact extends Component {
    state = {
        feedback: '',
    }
    handleChange = event => {
        this.setState({ feedback: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        const feedback = {
            feedback: this.state.feedback
        };
        axios.post('/feedback/create').then(res => {
            console.log(feedback);
        })
    }
    render() {
            return(
            <div className = 'pt-4' >
                    <div className='container'>
                        <h3 className="text-center" style={{ fontWeight: "1000" }}>
                            Feedback Form
                     <hr />
                        </h3>
                        <Router>
                            <form
                                onSubmit={this.handleSubmit}
                                className="col-sm-6 offset-sm-3">
                                <div className="form-group">
                                    <label>Subject</label><br />
                                    <textarea
                                        // value={feedback} 
                                        name="feedback"
                                        onChange={this.handleChange}
                                        className="form-control input-sm-6" id="feedback" rows="4" placeholder="Write Something for your feedback!!"></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </Router>
                    </div>
            </div>
        );
    }
}

// state = {
//     loading: false,
//     error: { },
//     FeedbackForm: {feedback: {elementType: 'input',elementConfig: {type: 'text',required: true},value: '',}}
// }
// formReset = () => {
//     const defFeedbackForm = {feedback: {elementType: 'input',elementConfig: {type: 'text',required: true},value: ''}}
//     this.setState({FeedbackForm: defFeedbackForm})
// }
// render(){
//     const openLoginModal =()=>{
//       jQuery('#Login-model').modal('show')
//     }}
// const isInFeedback = (feedback,userID) =>{
//     if(this.props.feedback.length){
//       let feedback=[]
//       this.props.feedback.map(feedback=>{
//         return feedback.push(feedback.feedback,feedback.userID);
//       })

//       if(feedback.indexOf(userID)!==-1){
//         return true
//       }
//     }
//     return false
//   }
// const addToFeedback=(userid,feedback)=>{
//     this.props.load();
//     this.props.addToFeedback(userid,feedback)
//   }
// const inFeedbackList= (feedback,userrid)=>{
//     if(feedback){
//       let feedbackUserIds=[];
//       this.props.feedback.map(feedback=>{
//         feedbackUserIds.push(
//           feedback.user.id
//         )
//         return feedbackUserIds;
//       })
//       if(feedbackUserIds.indexOf(userId)!==-1){
//         return true;
//       }
//     }
//     return false;
//   }

// componentDidMount() {
//     this.formReset();
// }

// render() {
//     let formElement=[];
// for(let key in this.state.FeedbackForm){formElement.push({ name: key, config: this.state.FeedbackForm[key] })}

// const inputChangedHandler= (event,inputIdentifier)=>{
//   const updatedForm = {
//   ...this.state.FeedbackForm
//   }

//   const updatedFormElement = {
//     ...updatedForm[inputIdentifier]
//   }

//   updatedFormElement.value = event.target.value;

//   updatedForm[inputIdentifier]=updatedFormElement;
//   this.setState({
//     FeedbackForm : updatedForm
//   })
// }
// const feedback=(event)=>{
//     event.preventDefault();
//     this.setState({
//       loading:true
//     })
//     const formInput={
//       name:this.state.FeedbackForm.feedback.value,
//       user_id:this.state.user_id
//     }

//     axios.post('/feedback/create',formInput).then(res=>{
//       const feedbackData={
//         feedback:this.state.FeedbackForm.feedback.value
//       }

//       this.props.onAuth(feedbackData.feedback);

//       this.setState({
//         loading:false,
//       })

//       setTimeout(()=>
//        {jQuery('#login-modal').modal('hide')}
//       ,2000)

//     })
//   }

//   const form = (
//     <div>
//       <h5 className="text-center">Contact Us<hr /></h5>
//       <form onSubmit={feedback}>
//       <div className='row'>
//          {formElement.map(element => {
//            return(
//              <div className="col-md-6" key={element.name}>
//                <Input  name={element.name} 
//                  elementType={element.config.elementType} 
//                  elementConfig={element.config.elementConfig}
//                  value={element.config.value}
//                  changed={(event)=>inputChangedHandler(event,element.name)}/>
//              </div>
//            )
//          })}
//          <div className="col-md-6">
//    <button type="submit" className="btn btn-success"
//    onClick={ this.props.authenticated ? inFeedbackList(this.props.feedback,this.props.user.id)?
//     ()=>{
//       Toast.fire({
//         icon: 'error',
//         title: 'User Should login first'
//       })
//     }
//     : ()=>{
//       addToWishlist(this.props.user.id,this.props.product.id)
//     }
//   : openLoginModal }>
//             >
//                   Submit</button>
//              </div>
//              <div className= 'col-md-12 pt-3'>
//                {this.state.loading?
//                  <p className='alert alert-secondary pt-3'>Please wait...</p>:""
//                }
//                 {this.props.authenticated?
//                  <p className='alert alert-success pt-3'>You are logged in!!</p>:""
//                }
//              </div>
//            </div>
//           </form>
//         </div>

//       );

//      return(
//        <Modal modelName="login-modal" modalType='modal-lg'>
//          {form}
//        </Modal>
//      )
//    }
//  }

//  const mapStateToProps= state=>{
//    return{
//      authenticated:state.auth.authenticated,
//    }
//  }

//  const mapDispatchToProps= dispatch=>{
//    return{
//     addToFeedback:(userId,productId)=>dispatch(action.ADD_TO_WISHLIST(userId,productId)),
//     load:()=>dispatch({type:actionTypes.WISHLIST_FETCH_START}),
//     addToFeedback:(feedback)=>dispatch(action.addToFeedback(feedback))
//    }
//  }
export default Contact;
//  export default connect(mapStateToProps,mapDispatchToProps)(Contact);

//             <div>
//                 <h5 className="text-center">Feedback Form <hr /></h5>
//                 <form onSubmit={feedback}>
//                     <div className='row'>
//                         {formElement.map(element => {
//                             return (
//                                 <div className="col-md-6" key={element.user_id}>
//                                     <Input feedback={element.feedback}
//                                         elementType={element.config.elementType}
//                                         elementConfig={element.config.elementConfig}
//                                         value={element.config.value}
//                                         changed={(event) => inputChangedHandler(event, element.feedback)} />
//                                 </div>
//                             )
//                         })}
//                         <div className="col-md-6">
//                             <button type="submit" className="btn btn-success">Submit</button>
//                         </div>
//                         <div className='col-md-12 pt-3'>
//                             {this.state.loading ?
//                                 <p className='alert alert-secondary pt-3'>Please wait...</p> : ""
//                             }
//                             {this.props.authenticated ?
//                                <div> 
//                                    <p className='alert alert-success pt-3'>#openLoginModal </p>
//                                     <i className='fas fa-heart'></i>
//                                 </div>
//                          :
//                                 <p>Feedback Submitted</p>}
//                     </div>          
//                     </div>
//                 </form>
//             </div>
//     }
//       mapStateToProps= state=>{
//        return{
//                     authenticated:state.auth.authenticated,
//        }
//      }

//       mapDispatchToProps= dispatch=>{
//        return{
//                     onAuth:(email,password)=>dispatch(actions.auth(email,password))
//        }
//      }
// export default connect(mapStateToProps,mapDispatchToProps)(Contact);

// render(){ */}
 //         return ( */ }
//             <div className='pt-4'> */ }
 //                 <div className='container'> */ }
 //                     <h3 className="text-center" style={{ fontWeight: "1000" }}> */ }
 //                         Feedback Form */ }
 //                     <hr /> */ }
//                     </h3> */ }
 //                     <Router> */ }
 //                         <form onSubmit={e=>onSubmit(e)} className="col-sm-6 offset-sm-3"> */ }
//                         <div className="form-group"> */ }
 //                             <label for="feedback">Subject</label><br/> */ }
 //                             <textarea value={feedback} name="feedback" onChange={e=>onInputChange(e)} className="form-control input-sm-6" id="feedback" rows="4" placeholder="Write Something for your feedback!!"></textarea> */ }
 //                         </div> */ }
 //                         <div className="form-group"> */ }
 //                             <button  className="btn btn-primary">Submit</button> */ }
 //                         </div> */ }
 //                     </form> */ }
 //                     </Router> */ }

//                 </div> */ }
//             </div> */ }
//         ); */ }
 //         } */ }
// } */ }
// import Axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { Component } from 'react';
import React, { Component } from 'react';
// import Axios from 'axios';
import axios from '../../axios';
import { connect } from 'react-redux';
// import Modal from '../../components/UI/Modal/Modal';
// import Input from '../../components/UI/Input/Input';
import * as actions from '../../store/actions/actionType';
// import jQuery from 'jquery';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          feedback: '',
          user_id: '',
        //   onFeedbackChange:onFeedbackChange.bind(this)
        }
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
                            <form id="contact-form"  onSubmit={this.handleSubmit}
                            method="POST"
                                className="col-sm-6 offset-sm-3">
                                <div className="form-group">
                                    <label>Subject</label><br />
                                    <textarea value={this.state.feedback} 
                                    // onChange= {() => this.onFeedbackChange()} 
                                        name="feedback"
                                        className="form-control input-sm-6" id="feedback" rows="4" placeholder="Write Something for your feedback!!"></textarea>
                                </div>
                                <div className="form-group">
                                {this.props.authenticated?
                                    <button className="btn btn-primary">Submit</button>
                                    :<p className="text-center">You should Login First</p>
                                }
                                </div>
                            </form>
                        </Router>
                    </div>
            </div>
        );
    }
    onFeedbackChange(event) {
        this.setState({feedback: event.target.value})
      }
}

 const mapStateToProps= state=>{
   return{
     authenticated:state.auth.authenticated,
     user:state.auth.user
   }
 }
 export default connect(mapStateToProps)(Contact);
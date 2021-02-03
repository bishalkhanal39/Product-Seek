import React,{ Component } from 'react';
import './login.css';
import Modal from '../../UI/Modal/Modal';
import Input from '../../UI/Input/Input';
// import axios from '../../../axios';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class Login extends Component{
  state = {
    loginForm:{
      email:{
        elementType:'input',
        elementConfig:{
          type:'email',
        },
        value:''
      },
      password:{
        elementType:'input',
        elementConfig:{
          type:'password',
        },
        value:''
      }
    } 
  }

  render(){
    const formElementArray=[];
    for(let key in this.state.loginForm){
      formElementArray.push({
        name:key,
        config:this.state.loginForm[key]
      })
    }

    const inputChangedHandler= (event,inputIdentifier)=>{
      const updatedForm = {
        ...this.state.loginForm
      }

      const updatedFormElement = {
        ...updatedForm[inputIdentifier]
      }

      updatedFormElement.value = event.target.value;

      updatedForm[inputIdentifier]=updatedFormElement;
      this.setState({
        loginForm : updatedForm
      })

    }


    const login = (event) =>{
      event.preventDefault();
      this.props.onAuth(this.state.loginForm.email.value,this.state.loginForm.password.value)
    }

    let loading = null;
    if(this.props.loading){
      loading = <p className='alert alert-secondary pt-3'>Please wait...</p>;
    }else if(this.props.authenticated){
       loading=<p className='alert alert-success pt-3'>You are now logged in</p>;
    }

    let error = null;

    if(this.props.error){
      error= <div className="alert alert-danger pt-3" role="alert">
              {this.props.error.message}
            </div>
    }

    const form = (
      <div>
        {error}
        <form onSubmit={login}>
        {formElementArray.map(element=>(
          <Input key={element.name} name={element.name} 
          elementType={element.config.elementType} 
          elementConfig={element.config.elementConfig}
          value={element.config.value}
          changed={(event)=>inputChangedHandler(event,element.name)}
          />
        ))}
        <div className='form-group'>
          <button type="submit" className='btn btn-primary'>Login</button>
        </div>
        {loading}
        </form>
      </div>
    );

    return(
      <Modal modelName='Login-model'>
      <div className="login">
        <h6>Login to product Seek</h6>
        {form}
      </div>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onAuth:(email,password) => dispatch(actions.auth(email,password))
  }
}

const mapStateToProps = state=>{
  return {
    loading:state.auth.loading,
    authenticated:state.auth.authenticated,
    error:state.auth.error,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);

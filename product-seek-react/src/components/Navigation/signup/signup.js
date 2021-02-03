import React,{Component} from 'react';
import axios from '../../../axios';
import {connect} from 'react-redux';
 import Modal from '../../UI/Modal/Modal';
 import Input from '../../UI/Input/Input';
 import * as actions from '../../../store/actions/auth';
 import jQuery from 'jquery';

class SignUp extends Component{
  state={
    loading:false,
    error:{},
    SignUpForm:{
      Name:{
        elementType:'input',
        elementConfig:{
          type:'text',
          required:true
        },
        value:'',
      },
      Email:{
        elementType:'input',
        elementConfig:{
          type:'email',
          required:true
        },
        value:'',
      },
      Address:{
        elementType:'input',
        elementConfig:{
          type:'text',
          required:true
        },
        value:'',
      },
      Contact:{
        elementType:'input',
        elementConfig:{
          type:'tel',
          required:true
        },
        value:'',
      },
      Password:{
        elementType:'input',
        elementConfig:{
          type:'password',
          required:true
        },
        value:'',
      },
      ConfirmPassword:{
        elementType:'input',
        elementConfig:{
          type:'password',
          required:true
        },
        value:'',
      }
      
    }
  }


  formReset= ()=>{
    const defSignUpForm={
      Name:{
        elementType:'input',
        elementConfig:{
          type:'text',
          required:true
        },
        value:'',
      },
      Email:{
        elementType:'input',
        elementConfig:{
          type:'email',
          required:true
        },
        value:'',
      },
      Address:{
        elementType:'input',
        elementConfig:{
          type:'text',
          required:true
        },
        value:'',
      },
      Contact:{
        elementType:'input',
        elementConfig:{
          type:'tel',
          required:true
        },
        value:'',
      },
      Password:{
        elementType:'input',
        elementConfig:{
          type:'password',
          required:true
        },
        value:'',
      },
      ConfirmPassword:{
        elementType:'input',
        elementConfig:{
          type:'password',
          required:true
        },
        value:'',
      }
      
    }
    this.setState({
      SignUpForm:defSignUpForm
    })
  }

  componentDidMount(){
   this.formReset();
  }



  render(){

    let formElement=[];
     for(let key in this.state.SignUpForm){
       formElement.push({
        name:key,
        config:this.state.SignUpForm[key]
       })
     }

     const inputChangedHandler= (event,inputIdentifier)=>{
      const updatedForm = {
        ...this.state.SignUpForm
      }

      const updatedFormElement = {
        ...updatedForm[inputIdentifier]
      }

      updatedFormElement.value = event.target.value;

      updatedForm[inputIdentifier]=updatedFormElement;
      this.setState({
        SignUpForm : updatedForm
      })

    }

    const signUp=(event)=>{
      event.preventDefault();
      this.setState({
        loading:true
      })
      const formInput={
        name:this.state.SignUpForm.Name.value,
        email:this.state.SignUpForm.Email.value,
        address:this.state.SignUpForm.Address.value,
        phone_number:this.state.SignUpForm.Contact.value,
        password:this.state.SignUpForm.Password.value,
        password_confirmation:this.state.SignUpForm.ConfirmPassword.value,
        role:'user',
      }
      
      axios.post('/register',formInput).then(res=>{
        const signInData={
          email:this.state.SignUpForm.Email.value,
          password:this.state.SignUpForm.Password.value,
        }

        this.props.onAuth(signInData.email,signInData.password);

        this.setState({
          loading:false,
        })

        setTimeout(()=>
         {jQuery('#signup-modal').modal('hide')}
        ,2000)

      })
    }


     const form = (
       <div>
         <h5 className="text-center">Register to Product Seek <hr/></h5>
         <form onSubmit={signUp}>
         <div className='row'>
            {formElement.map(element=>{
              return(
                <div className="col-md-6" key={element.name}>
                  <Input  name={element.name} 
                    elementType={element.config.elementType} 
                    elementConfig={element.config.elementConfig}
                    value={element.config.value}
                    changed={(event)=>inputChangedHandler(event,element.name)}/>
                </div>
              )
            })}
            <div className="col-md-6">
              <button type="submit" className="btn btn-success">Register</button>
            </div>
            <div className= 'col-md-12 pt-3'>
              {this.state.loading?
                <p className='alert alert-secondary pt-3'>Please wait...</p>:""
              }
               {this.props.authenticated?
                <p className='alert alert-success pt-3'>You are logged in!!</p>:""
              }
            </div>
          </div>
         </form>
       </div>
       
     );

    return(
      <Modal modelName="signup-modal" modalType='modal-lg'>
        {form}
      </Modal>
    )
  }
}

const mapStateToProps= state=>{
  return{
    authenticated:state.auth.authenticated,
  }
}

const mapDispatchToProps= dispatch=>{
  return{
    onAuth:(email,password)=>dispatch(actions.auth(email,password))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
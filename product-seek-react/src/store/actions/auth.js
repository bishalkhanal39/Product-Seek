import * as actionTypes from './actionType';
import axios from '../../axios';
import jQuery from "jquery";
import * as wishlist from './wishlist';
import * as order from './order';

export const authStart = ()=>{
  return{
    type:actionTypes.AUTH_START,
  }
}


export const authSuccess= (user,token) =>{
  return {
    type:actionTypes.AUTH_SUCCESS,
    token:token,
    user:user,
  }
}

export const authFail = (error)=>{
  return{
    type:actionTypes.AUTH_FAIL,
    error:error,
  }
}

export const auth = (email,password)=>{
  return dispatch =>{
    dispatch(authStart());
    const authData = {
      email:email,
      password:password,
    }
    axios.post('/login',authData).then(response=>{
      // console.log(response.data);
      dispatch(authSuccess(response.data.user,response.data.access_token))
      dispatch(wishlist.Wishlist(response.data.user.id));
      dispatch(order.ORDER(response.data.user.id))
    
      setTimeout(()=>{jQuery('#Login-model').modal('hide')},2000)
    }).catch(error=>{
      // console.log(error);
      const message={
        message:'Invalid Credentials'
      }
      dispatch(authFail(message))
    })
  }
}
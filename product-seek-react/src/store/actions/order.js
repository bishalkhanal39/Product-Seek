import * as actionTypes from './actionType';
import axios from '../../axios';

export const ORDER_FETCH_SUCCESS = (orders) => {
  return {
    type:actionTypes.ORDER_FETCH_SUCCESS,
    orders:orders,
    // delivered:delivered,
  }
}


export const DELIVERED_FETCH_SUCCESS = (delivered) => {
  return {
    type:actionTypes.DELIVERED_FETCH_SUCCESS,
    delivered:delivered,
  }
}

export const DELIVERED_FETCH_FINISH = () => {
  return {
    type:actionTypes.DELIVERED_FETCH_FINISH,
  }
}

export const ORDER_FETCH_START = () => {
  return{
    type:actionTypes.ORDER_FETCH_START
  }
}


export const ORDER_FETCH_FAIL = (errors) => {
  return{
    type:actionTypes.ORDER_FETCH_FAIL,
    errors:errors,
  }
}

export const EMPTY_ORDERS = () => {
  return{
    type:actionTypes.EMPTY_ORDERS
  }
}



export const ORDER = (userId) => {

  return dispatch => {
    dispatch(ORDER_FETCH_START())

    axios.get('/order/user-orders/'+ userId).then( res => {
      dispatch(ORDER_FETCH_SUCCESS(res.data))
    }).catch(errors=>{
      dispatch(ORDER_FETCH_FAIL(errors.data))
      dispatch(DELIVERED_FETCH_FINISH())
    })

    axios.get('/order/user-delivered-orders/'+ userId).then( res => {
      dispatch(DELIVERED_FETCH_SUCCESS(res.data))
      dispatch(DELIVERED_FETCH_FINISH())
    }).catch(errors=>{
      dispatch(ORDER_FETCH_FAIL(errors.data))
      dispatch(DELIVERED_FETCH_FINISH())
    })

  } 
}

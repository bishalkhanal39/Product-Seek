import * as actionTypes from './actionType';
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

export const ADD_TO_CART = (product) =>{
  return{
    type:actionTypes.ADD_TO_CART,
    product:product
  }
}

export const REMOVE_FROM_CART = (productID) =>{
  return{
    type:actionTypes.REMOVE_FROM_CART,
    productID:productID
  }
}

export const CLEAR_CART = ()=>{
  return{
    type:actionTypes.CLEAR_CART,
  }
}

export const UPDATE_TOTAL = ()=>{
  return{
    type:actionTypes.UPDATE_TOTAL,
  }
}

export const INCREASE_QUANTITY = (productID) =>{
  return{
    type:actionTypes.INCREASE_QUANTITY,
    productID:productID,
  }
}

export const DECREASE_QUANTITY = (productID) =>{
  return{
    type:actionTypes.DECREASE_QUANTITY,
    productID:productID,
  }
}


export const addToCart = (product) => {
  return dispatch=>{
    dispatch(ADD_TO_CART(product))
    dispatch(UPDATE_TOTAL())
    Toast.fire({
      icon: 'success',
      title: 'Added to cart Successfully'
    })
  }
}

export const increaseQuantity = (productID) =>{
  return dispatch=>{
    dispatch(INCREASE_QUANTITY(productID))
    dispatch(UPDATE_TOTAL())
  }
}

export const decreaseQuantity = (productID) =>{
  return dispatch=>{
    dispatch(DECREASE_QUANTITY(productID))
    dispatch(UPDATE_TOTAL())
  }
}

export const removeCart = (productID) =>{
  return dispatch=>{
    dispatch(REMOVE_FROM_CART(productID))
    dispatch(UPDATE_TOTAL())
    Toast.fire({
      icon: 'success',
      title: 'Removed from cart Successfully'
    })
  }
}
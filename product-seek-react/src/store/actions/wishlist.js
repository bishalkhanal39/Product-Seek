import * as actionType from './actionType';
import axios from '../../axios';
// import jQuery from "jquery";
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const FETCH_WISHLIST=(wishlist)=>{
  return{
    type:actionType.FETCH_WISHLIST,
    wishlist:wishlist
  }
}

export const WISHLIST_FETCH_START=()=>{
  return{
    type:actionType.WISHLIST_FETCH_START
  }
}

export const WISHLIST_FETCH_SUCCESS=()=>{
  return{
    type:actionType.WISHLIST_FETCH_SUCCESS
  }
}

export const EMPTY_WISHLIST=()=>{
  return {
    type:actionType.EMPTY_WISHLIST
  }
}



export const Wishlist=(userId)=>{
  return dispatch=>{
    axios.get('/wishlist/show/'+userId).then(res=>{
      dispatch(FETCH_WISHLIST(res.data));
      dispatch(WISHLIST_FETCH_SUCCESS());
    })
  }
}

export const ADD_TO_WISHLIST=(userId,productId)=>{
  return dispatch=>{
    const formData={
      user_id:userId,
      product_id:productId
    }
    
    axios.post('/wishlist/add',formData).then(()=>{

      dispatch(Wishlist(userId))
      Toast.fire({
        icon: 'success',
        title: 'Added to Wishlist Successfully'
      })
    }
    )
  }
}

export const REMOVE_FROM_WISHLIST=(wishlistId,userId)=>{
  return dispatch=>{
    axios.get('/wishlist/remove/'+ wishlistId).then(()=>{
      dispatch(Wishlist(userId))
      Toast.fire({
        icon: 'success',
        title: 'Product removed from wishlist'
      })
    })
  }
}
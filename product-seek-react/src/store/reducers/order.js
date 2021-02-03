import * as actionTypes from '../actions/actionType';

const intialState = {
  orders:[],
  delivered:[],
  loading:false,
  errors:{} 
}


const reducer = (state=intialState , action) => {
  switch(action.type){

    case actionTypes.ORDER_FETCH_START:
      return{
        ...state,
        loading:true,
      }

    case actionTypes.ORDER_FETCH_SUCCESS:
      return{
        ...state,
        orders:action.orders,
      }

    case actionTypes.ORDER_FETCH_FAIL:
      return {
        ...state,
        errors:action.errors
      }

    case actionTypes.DELIVERED_FETCH_SUCCESS:
      return {
        ...state,
        delivered:action.delivered,
      }

    case actionTypes.DELIVERED_FETCH_FINISH:
      return {
        ...state,
        loading:false,
      }
  

    case actionTypes.EMPTY_ORDERS:
      return {
        ...state,
        orders:[],
        delivered:[],
        loading:false,
        errors:{}
      }

    default:
      return state;

  }
}

export default reducer;
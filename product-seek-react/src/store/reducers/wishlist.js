import * as actionTypes from '../actions/actionType';


const intialState = {
  loading:false,
  wishlist:[],
}

const reducer = (state=intialState,action)=>{
  switch(action.type){
    case actionTypes.FETCH_WISHLIST:
      return{
        ...state,
        wishlist:action.wishlist,
      }
    case actionTypes.WISHLIST_FETCH_START:
      return{
        ...state,
        loading:true,
      }
      case actionTypes.WISHLIST_FETCH_SUCCESS:
      return{
        ...state,
        loading:false,
      }
      case actionTypes.EMPTY_WISHLIST:
        return{
          ...state,
          wishlist:[],
        }
    default:
      return state;
  }
}


export default reducer;


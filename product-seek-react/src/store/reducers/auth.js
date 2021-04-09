import * as actionTypes from '../actions/actionType';

const initialState = {
  authenticated:false,
  token:null,
  user:null,
  loading:false,
  error:null
}

const reducer = (state = initialState ,action)=>{

  switch(action.type){
    case actionTypes.AUTH_START:
      return{
        ...state,
        error:null,
        loading:true,
      }
    case actionTypes.AUTH_SUCCESS:
      return{
        ...state,
        authenticated:true,
        token:action.token,
        user:action.user,
        loading:false,
        
      }
    case actionTypes.AUTH_FAIL:
      return{
        ...state,
        authenticated:false,
        error:action.error,
        user:null,
        token:false,
        loading:false,
      }
    case actionTypes.AUTH_LOGOUT:
      return{
        ...state,
        authenticated:false,
        token:null,
        user:null,
        loading:false,
        error:null
      }
    default:
      return state;
  }
}


export default reducer;
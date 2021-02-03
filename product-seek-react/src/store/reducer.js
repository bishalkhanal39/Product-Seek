import { combineReducers } from 'redux';
import authReducer from './reducers/auth';
import wishlistReducer from './reducers/wishlist';
import cartReducer from './reducers/cart';
import orderReducer from './reducers/order';

const rootReducer = combineReducers({
  auth:authReducer,
  wishlist:wishlistReducer,
  cart:cartReducer,
  order:orderReducer
})

export default rootReducer;
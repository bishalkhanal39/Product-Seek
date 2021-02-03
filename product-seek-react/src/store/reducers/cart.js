import * as actionTypes from '../actions/actionType';

const initialState = {
  cartItems:[],
  cart_total:0,
}

const reducer = (state = initialState ,action)=>{

  switch(action.type){

    //add to cart 
    case actionTypes.ADD_TO_CART:

      return{
        ...state,
        cartItems:state.cartItems.concat({
          product:action.product,
          quantity:1,
          total:action.product.price
        }),
      }

      // end add to cart
      
      // update cart total
      case actionTypes.UPDATE_TOTAL:
        const updateTotal= (cartItems)=>{
          let ItemsPriceQuantity = []
            if(cartItems.length){
              cartItems.map(item=>{
                ItemsPriceQuantity.push({
                  price:item.product.price,
                  quantity:item.quantity
                })
              })
              let totalAmount=0;
                for(let i=0; i < ItemsPriceQuantity.length ;i++){
                  totalAmount=totalAmount + ItemsPriceQuantity[i].price*ItemsPriceQuantity[i].quantity
                }
              return totalAmount;
            }  

            return 0;

        }

        return{
          ...state,
          cart_total:updateTotal(state.cartItems)
        }

      //end update cart total
      
      //increase quantity
      case actionTypes.INCREASE_QUANTITY:
         const quantityIncrease= ()=>{
           let cartItems=state.cartItems
           cartItems.map(item=>{
             if(item.product.id===action.productID){
                item.quantity++;
                item.total=item.quantity*item.product.price
             }
           })
           return cartItems;
         } 
        return{
          ...state,
          cartItems: quantityIncrease(),  
        }
      //end increase quantity

      // decrease quantity
      case actionTypes.DECREASE_QUANTITY:
        const quantityDecrease= ()=>{

          state.cartItems.map(item=>{
            if(item.product.id===action.productID){
               item.quantity--;
               item.total=item.quantity*item.product.price
               if(item.quantity===0){
                 let index=state.cartItems.indexOf(item)
                 state.cartItems.splice(index,1)
               }
            }
          })
          return state.cartItems;
        } 
       return{
         ...state,
         cartItems: quantityDecrease(),  
       }
      // end decrease quantity

      case actionTypes.REMOVE_FROM_CART:
        const removeItem= ()=>{
          state.cartItems.map(item=>{
            if(item.product.id===action.productID){
              let index=state.cartItems.indexOf(item)
              state.cartItems.splice(index,1)
            }
          })
          return state.cartItems;
        } 
        return{
          ...state,
          cartItems:removeItem(),
        }

      case actionTypes.CLEAR_CART:
        return{
          ...state,
          cartItems:[],
          cart_total:0,
        }

      default:
        return state;
  }

}

export default reducer;
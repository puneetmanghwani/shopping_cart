import { INCREASE_ITEM,DECREASE_ITEM,REMOVE_ITEM,RESTORE_CART } from './actionType';
import { increaseItemInCart,decreaseItemInCart,removeItemFromCart,refreshCart } from '../Utils/cartOperations';

import items from './cartItems';


const INITIAL_STATE = {
    cartItems : JSON.parse(JSON.stringify(items)) 
}

const cartReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case INCREASE_ITEM:
            return {
                ...state,
                cartItems : increaseItemInCart(state.cartItems,action.payload)
            }
        case DECREASE_ITEM:
            return {
                ...state,
                cartItems : decreaseItemInCart(state.cartItems,action.payload)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems : removeItemFromCart(state.cartItems,action.payload)
            }
        case RESTORE_CART:
            return {
                ...state,   
                cartItems : refreshCart()
            }
        default:
            return state
    }
}

export default cartReducer;
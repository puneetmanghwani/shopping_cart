import { INCREASE_ITEM,DECREASE_ITEM,REMOVE_ITEM } from './actionType';
import { increaseItem,decreaseItem,removeItem } from './actions';
import { increaseItemInCart,decreaseItemInCart,removeItemFromCart } from '../Utils/cartOperations';

import items from './cartItems';
import { act } from 'react-dom/test-utils';

const INITIAL_STATE = {
    cartItems : items
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
        default:
            return state
    }
}

export default cartReducer;
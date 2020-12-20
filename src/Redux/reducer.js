import { INCREASE_ITEM,DECREASE_ITEM,REMOVE_ITEM } from './actionType';
import { increaseItem,decreaseItem,removeItem } from './actions';

import items from './cartItems';

const INITIAL_STATE = {
    cartItems : items
}

const cartReducer = (state = INITIAL_STATE,action)=>{
    
}
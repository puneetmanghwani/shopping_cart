import { INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM,RESTORE_CART } from './actionType';

export const increaseItem = (item) =>({
    type : INCREASE_ITEM,
    payload : item
})

export const decreaseItem = (item) => ({
    type : DECREASE_ITEM,
    payload : item
})

export const removeItem = (item) => ({
    type : REMOVE_ITEM,
    payload : item
})

export const restoreCart = (item) => ({
    type : RESTORE_CART
})
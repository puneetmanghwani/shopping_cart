import { INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM } from './actionType';

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
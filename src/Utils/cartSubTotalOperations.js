import { createSelector } from "reselect";
const getCart = (state) => state.cartItems;


export const getCartItems = createSelector(
  [getCart],
  (cartItems) => cartItems
);


export const getCartItemsCount = createSelector(
  [getCartItems],
  (cartItems) =>
    cartItems.reduce((accumulatedQty, cartItem) => {
      return accumulatedQty + cartItem.amount;
    }, 0)
);


export const getTotalOfCart = createSelector([getCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQty, cartItem) => {
        return accumulatedQty + cartItem.amount * cartItem.price;
    },0)
);


export const getItemsDiscount = createSelector(
  [getCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQty, cartItem) => {
        return accumulatedQty + (cartItem.amount * cartItem.price * cartItem.discount) / 100
      },0)
);


export const getItemTypeBasedDiscount = createSelector(
  [getCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQty, cartItem) =>
    {
      return cartItem.type === 'fiction'
        ? accumulatedQty + (cartItem.amount * cartItem.price * 10/100)
        : 0
    },0)
);


export const getFinalPriceOfCart = createSelector(
  [getCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQty, cartItem) => {
        return (
          accumulatedQty + cartItem.amount * cartItem.price -(cartItem.amount * cartItem.price * cartItem.discount) / 100
        );
      },0)
);

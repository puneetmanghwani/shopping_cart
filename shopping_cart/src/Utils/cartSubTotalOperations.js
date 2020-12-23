import { createSelector } from "reselect";
const getCart = (state) => state.cartItems;

// Getting the all items in cart in state
export const getCartItems = createSelector(
  [getCart],
  (cartItems) => cartItems
);

// Calculating total quantity of all cart items
export const getCartItemsCount = createSelector(
  [getCartItems],
  (cartItems) =>
    cartItems.reduce((accumulatedQty, cartItem) => {
      return accumulatedQty + cartItem.amount;
    }, 0)
);

// Getting total value of items in cart without discount
export const getTotalOfCart = createSelector([getCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQty, cartItem) => {
        return accumulatedQty + cartItem.amount * cartItem.price;
    },0)
);

// Calculating discount of items
export const getItemsDiscount = createSelector(
  [getCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQty, cartItem) => {
        return accumulatedQty + (cartItem.amount * cartItem.price * cartItem.discount) / 100
      },0)
);

// Calculating discount of specific type
export const getItemTypeBasedDiscount = createSelector(
  [getCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQty, cartItem) => {
        return cartItem.type === 'fiction'
          ? accumulatedQty + (cartItem.amount * cartItem.price * 15 / 100)
          : accumulatedQty
      }, 0)
);

// Calculating final price of cart by subtrating total discount from total value
export const getFinalPriceOfCart = createSelector(
  [getCartItems,getTotalOfCart,getItemsDiscount,getItemTypeBasedDiscount],
  (cartItems,cartTotal,itemsDiscount,typeBasedDiscount) => cartTotal - itemsDiscount - typeBasedDiscount
);



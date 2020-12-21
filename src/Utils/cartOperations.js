import cartItems from "../Redux/cartItems"

export const increaseItemInCart = (cartItems,item) => {
    const itemIndex = cartItems.findIndex( cartItem => cartItem.id === item.id  );
    var modifiedCart = [...cartItems];
    if(itemIndex){
        var modifiedCartItem = [...modifiedCart[itemIndex]]
        modifiedCartItem.amount+=1;
        modifiedCart[itemIndex] = modifiedCartItem
    }
    return modifiedCart;
}

export const decreaseItemInCart = (cartItems,item) => {
    const itemIndex = cartItems.findIndex( cartItem => cartItem.id === item.id  );
    var modifiedCart = [...cartItems];
    if(itemIndex){
        var modifiedCartItem = [...modifiedCart[itemIndex]]
        if(modifiedCartItem.amount > 1){
            modifiedCartItem.amount-=1;
            modifiedCart[itemIndex] = modifiedCartItem
        }
        else{
            modifiedCart = cartItems.filter( cartItem => cartItem.id !== item.id );
        }
    }
    return modifiedCart;
}

export const removeItemFromCart = (cartItems,item) => {
    
    const modifiedCart = cartItems.filter( cartItem => cartItem.id !== item.id );

    return modifiedCart;
}

import items from '../Redux/cartItems';
import Swal from 'sweetalert2'


export const increaseItemInCart = (cartItems,item) => {
    console.log(items)
    const itemIndex = cartItems.findIndex( cartItem => cartItem.id === item.id  );
    var modifiedCart = [...cartItems];
    
    if(itemIndex >= 0){
        var modifiedCartItem = modifiedCart[itemIndex]
        
        modifiedCartItem.amount+=1;
        modifiedCart[itemIndex] = modifiedCartItem
    }
    return modifiedCart;
}

export const decreaseItemInCart = (cartItems,item) => {
    const itemIndex = cartItems.findIndex( cartItem => cartItem.id === item.id  );
    var modifiedCart = [...cartItems];
    if(itemIndex >= 0){
        var modifiedCartItem = modifiedCart[itemIndex]

        if(modifiedCartItem.amount > 1){
            modifiedCartItem.amount-=1;
            modifiedCart[itemIndex] = modifiedCartItem
        }
        else{
            modifiedCart = cartItems.filter( cartItem => cartItem.id !== item.id );
            Swal.fire({
                title : `${item.name} has been deleted`,
                confirmButtonText: 'OK'
            })
        }
    }
    return modifiedCart;
}

export const removeItemFromCart = (cartItems,item) => {
    
    const modifiedCart = cartItems.filter( cartItem => cartItem.id !== item.id );
    Swal.fire({
        title : `${item.name} has been deleted`,
        confirmButtonText: 'OK'
    })
    return modifiedCart;
}

export const refreshCart = () => {
    localStorage.clear();
    return JSON.parse(JSON.stringify(items));
}
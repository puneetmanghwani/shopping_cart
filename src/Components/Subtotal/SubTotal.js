import React from "react";
import { useSelector,useDispatch } from "react-redux";

function SubTotal(){
    const cart = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            {cart.cartItems.length}
        </div>
    )
}

export default SubTotal;
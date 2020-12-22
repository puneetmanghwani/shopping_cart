import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increaseItem,decreaseItem,removeItem } from '../../Redux/actions'; 

function CartItem({ item }){
    const cart = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <li key={item.id}>{item.name}  {item.amount} {item.price}
                <button onClick={() => dispatch(increaseItem(item))}>increase</button>
                <button onClick={() => dispatch(decreaseItem(item))}>decrease</button>
                <button onClick={() => dispatch(removeItem(item))}>remove</button>
            </li>
        </div>
    )
}

export default CartItem;
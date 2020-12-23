
//  **Library Functions Import***
import React from "react";
import { useDispatch } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

// **Redux actions import**
import { increaseItem,decreaseItem,removeItem } from '../../Redux/actions'; 

// **Css imports**
import './CartItem.styles.scss';

function CartItem({ item }){
    const dispatch = useDispatch();

    return (
        <div className="cart__product">
            <div className="cart__productInfo">
                <div className="cart__productInfoVal">
                    <img src={item.img_url} alt={item.name} />
                    <h4>{item.name}</h4>
                </div>
                {/* Remove the item */}
                <CloseIcon onClick={() => dispatch(removeItem(item))} />
            </div>

            <div className="qtn">
                {/* Decrease the item quantity */}
                <RemoveIcon
                    onClick={() => dispatch(decreaseItem(item))}
                />
                <div className="item__qty">
                    <p>{item.amount}</p>
                </div>
                {/* Increase the item quantity */}
                <AddIcon onClick={() => dispatch(increaseItem(item))} />
            </div>

            <div className="price">
                <strong>${item.price}</strong>
            </div>
        </div>
    )
}

export default CartItem;



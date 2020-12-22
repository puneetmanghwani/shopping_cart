
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
        <div className="checkout__product">
            <div className="checkout__productInfo">
                <div className="checkout__productInfoVal">
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
                <div className="qtn__val">
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



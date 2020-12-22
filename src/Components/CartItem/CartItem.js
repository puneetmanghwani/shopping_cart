import React from "react";
import { useDispatch } from "react-redux";
import { increaseItem,decreaseItem,removeItem } from '../../Redux/actions'; 
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
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
                <CloseIcon onClick={() => dispatch(removeItem(item))} />
            </div>

            <div className="qtn">
                <RemoveIcon
                    onClick={() => dispatch(decreaseItem(item))}
                />
                <div className="qtn__val">
                    <p>{item.amount}</p>
                </div>
                <AddIcon onClick={() => dispatch(increaseItem(item))} />
            </div>

            <div className="price">
                <strong>${item.price}</strong>
            </div>
        </div>
    )
}

export default CartItem;



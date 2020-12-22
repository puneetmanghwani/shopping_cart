
//  **Library Functions Import***
import React from "react";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";

// **Css imports**
import "./SubTotal.styles.scss";

// **Cart Calculation Related Imports**
import {
    getCartItemsCount,
    getTotalOfCart,
    getItemsDiscount,
    getFinalPriceOfCart,
    getItemTypeBasedDiscount
} from '../../Utils/cartSubTotalOperations';

function SubTotal(){
    const itemCount = useSelector(getCartItemsCount);
    const cartTotal = useSelector(getTotalOfCart);
    const typeDiscount = useSelector(getItemTypeBasedDiscount);
    const discount = useSelector(getItemsDiscount);
    const finalPrice = useSelector(getFinalPriceOfCart);
    

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <div className="order__info">
                            <h3 style={{ marginTop: "10px" }}>Total</h3>
                            <p style={{ marginTop: "10px" }}>
                                Items ({itemCount}) <p style={{ display: "inline",marginLeft:"8.5rem" }} >:&nbsp;&nbsp;${cartTotal} </p>
                            </p>
                            <p style={{ marginTop: "10px" }}>Discount<p style={{ display: "inline", marginLeft: "8.5rem" }}>&nbsp;: -${discount}</p>
                            </p>
                            <p>Type Discount<p style={{ display: "inline", marginLeft: "6.3rem" }} >: -${typeDiscount}</p></p>
                        </div>

                        <div className="order__total">
                            <p>Order total </p>
                            <strong>{value}</strong>
                        </div>
                    </>
                )}
                decimalScale={2}
                value={finalPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default SubTotal;




//  **Library Functions Import***
import React from "react";
import { connect } from 'react-redux';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

//  **Redux actions import**
import { restoreCart } from '../../Redux/actions'; 

//  ** Components Import**
import SubTotal from '../Subtotal/SubTotal';
import CartItem from '../CartItem/CartItem';

// **Css imports**
import './Cart.styles.scss';

class Cart extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.cartItems.length > 0
                        ? (
                            <>
                                <div className="cart__title">
                                    <ArrowBackIosIcon />
                                    <h1>Order Summary</h1>
                                </div>
                                <div className="cart">
                                    <div className="cart__left">
                                        <hr />
                                        <div className="item__description">
                                            <p className="item__infoCount">Items({this.props.cartItems.length})</p>
                                            <p className="item__infoQty">Qty</p>
                                            <p className="items__infoPrice">Price</p>
                                        </div>
                                        <hr style={{ marginBottom: "20px" }} />
                                        {
                                            this.props.cartItems.map(cartItem => {
                                                return (
                                                    <CartItem item={cartItem} />
                                                )
                                            })
                                        }
                                    </div>

                                    <div className="cart__right">
                                        <SubTotal />
                                    </div>
                                </div>
                            </>
                        )
                        : (
                            <div>
                                <h1>Cart is Empty</h1>
                                <button onClick={() => this.props.restore()} >Restore </button>
                            </div>
                        )
                }
                
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cartItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        restore: () => dispatch(restoreCart())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);



                

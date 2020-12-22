import React from "react";
import { connect } from 'react-redux';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { restoreCart } from '../../Redux/actions'; 

import SubTotal from '../Subtotal/SubTotal';
import CartItem from '../CartItem/CartItem';

import './Cart.styles.scss';

class Cart extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.cartItems.length > 0
                        ? (
                            <>
                                <div className="checkout__title">
                                    <ArrowBackIosIcon />
                                    <h1>Order Summary</h1>
                                </div>
                                <div className="checkout">
                                    <div className="checkout__left">
                                        <hr />
                                        <div className="items__info">
                                            <p className="items__infoItemCount">Items({this.props.cartItems.length})</p>
                                            <p className="items__infoQty">Qty</p>
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

                                    <div className="checkout__right">
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



                

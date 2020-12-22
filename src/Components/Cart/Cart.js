import React from "react";
import { connect } from 'react-redux';
import { restoreCart } from '../../Redux/actions'; 

import SubTotal from '../Subtotal/SubTotal';
import CartItem from '../CartItem/CartItem';

class Cart extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.cartItems.length>0
                    ? (
                        <div>
                        Cart
                        {
                         this.props.cartItems.map(cartItem=>{
                         return (
                             <CartItem item={cartItem} />
                         )
                        })
                        }
                        </div>
                    )
                    : (
                        <div>
                        <button onClick={()=> this.props.restore()} >Restore </button>
                        </div>
                    )
                }
                <SubTotal />
            </div>
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



                
                 
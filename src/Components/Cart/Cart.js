import React from "react";
import { connect } from 'react-redux';
import { increaseItem,decreaseItem,removeItem,restoreCart } from '../../Redux/actions'; 

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
                             <li key={cartItem.id}>{cartItem.name}  {cartItem.amount} {cartItem.price}
                             <button onClick={() => this.props.increase(cartItem)}>increase</button>
                             <button onClick={() => this.props.decrease(cartItem)}>decrease</button>
                             <button onClick={() => this.props.remove(cartItem)}>remove</button>
                             </li>
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
        increase: (item) => dispatch(increaseItem(item)),
        decrease: (item) => dispatch(decreaseItem(item)),
        remove: (item) => dispatch(removeItem(item)),
        restore: () => dispatch(restoreCart())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);



                
                 
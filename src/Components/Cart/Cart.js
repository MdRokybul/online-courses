import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.carts;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const enrolled = cart[i].price;
        total = total + enrolled;
    }
    return (
            <div className="container">
                <div className="row">
                    <div className="cart-container mt-5 pl-5">
                        <h4>Enrolled Courses: <span className="badge badge-light text-light bg-success"> {cart.length} </span> </h4>
                        <h4> Total Price: ${total} </h4> 
                    </div>
                </div>
            </div>
    );
};

export default Cart;
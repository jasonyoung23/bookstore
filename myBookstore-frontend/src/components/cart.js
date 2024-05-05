import React from 'react';
import { useCart } from '../contexts/cartcontext';
import '../styles/cartStyle.css'

const Cart = () => {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

    return (
        <div className="cart-page">
            <h2>My Shopping Cart</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Cover</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <tr key={index}>
                                <td><img src={item.image} alt={item.title} className="cart-item-image" /></td>
                                <td>{item.title}</td>
                                <td>
                                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                                </td>
                                <td>{item.totalPrice}元</td>
                                <td><button onClick={() => removeFromCart(item.id)}>Delete</button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Your cart is empty.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;

import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, product) => total + product.price, 0)}</p>
    </div>
  );
};

export default connect(state => ({ cart: state.cart }), { removeFromCart })(Cart);
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(state => ({ products: state.products }), { addToCart })(ProductList);
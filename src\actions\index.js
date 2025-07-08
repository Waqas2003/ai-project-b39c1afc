export function getProducts() {
  return {
    type: 'GET_PRODUCTS'
  };
}

export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    product
  };
}

export function removeFromCart(productId) {
  return {
    type: 'REMOVE_FROM_CART',
    productId
  };
}
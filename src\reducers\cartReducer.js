const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    case 'REMOVE_FROM_CART':
      return state.filter(product => product.id !== action.productId);
    default:
      return state;
  }
}
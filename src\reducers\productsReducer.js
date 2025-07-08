const initialState = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 9.99 },
  { id: 3, name: 'Product 3', price: 12.99 }
];

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
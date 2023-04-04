const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'Electronics' },
    { name: 'food', displayName: 'Food', description: 'Food' },
    { name: 'clothing', displayName: 'Clothing', description: 'Clothing'}
  ],

  products: [
    { name: 'electronics1', category: 'electronics', description: 'TV', price: 100, inventorycount: 5 },
    { name: 'electronics2', category: 'electronics', description: 'Radio', price: 50, inventorycount: 10 },
    { name: 'electronics3', category: 'electronics', description: 'Computer', price: 150, inventorycount: 15 },
    { name: 'food1', category: 'food', description: 'Pizza', price: 5, inventorycount: 20 },
    { name: 'food2', category: 'food', description: 'Tacos', price: 10, inventorycount: 25 },
    { name: 'food3', category: 'food', description: 'Burgers', price: 15, inventorycount: 30 },
    
  ],
  activeCategory: '',
};

const categoryReducer = (state=initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state, 
        activeCategory: payload,
        products:initialState.products.filter(product => product.category === payload.name),

      }; 
    case 'RESET_CATEGORY':
      return initialState;
      default:
        return state;
  }
};
//actions
export const set = (category) => {
  return {
    type: 'SET',
    payload: category
  }
};
// export const resetCategory = () => {
//   return {
//     type: 'RESET_CATEGORY',
//     payload: '',
//   }
// };


export default categoryReducer;




const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'Electronics' },
    { name: 'food', displayName: 'Food', description: 'Food' },
    { name: 'clothing', displayName: 'Clothing', description: 'Clothing'}
  ],

  activeCategory: '',
};

const categoryReducer = (state=initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case 'SET':
      return {
        ...state, 
        activeCategory: payload,

      }; 
    case 'RESET':
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



export default categoryReducer;




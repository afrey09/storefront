const initialState = [];

let tempState = [];

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_PRODUCT':
      tempState = [...payload];
      return payload;
    case 'UPDATE_PRODUCT':
      return state.map(product => product.name === payload.name ? payload : product);
    case 'SELECT':
      return tempState.filter(product => product.category === payload.name);
      default:
        return state;

  }
};

export default productReducer;
const initialState = [];

const cartReducer = (state=initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_PRODUCT':
      return [...state, payload];
      default:
        return state;
    // case 'REMOVE_PRODUCT':
    //   return state.filter((item) => item !== payload);
    // default:
    //   return state;
  }
};

export default cartReducer;
const initialState = [
  { name: 'ipod', category: 'electronics', description: 'TV', price: 100, inventorycount: 5 },
  { name: 'TV', category: 'electronics', description: 'Radio', price: 50, inventorycount: 10 },
  { name: 'Cellphone', category: 'electronics', description: 'Computer', price: 150, inventorycount: 15 },
  { name: 'Pizza', category: 'food', price: 5, inventorycount: 20 },
  { name: 'Tacos', category: 'food', price: 10, inventorycount: 25 },
  { name: 'Burgers', category: 'food', price: 15, inventorycount: 30 },
  { name: 'Shirt', category: 'clothing', price: 20, inventorycount: 35 },
  { name: 'Pants', category: 'clothing', price: 25, inventorycount: 40 },
  { name: 'Hat', category: 'clothing', price: 30, inventorycount: 45 },

];

let tempState = [...initialState];

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET':
      return initialState.filter(product => product.category === payload.name);
    case 'ADD_PRODUCT':
      return initialState.map(product => product.name === payload.name ? product.inStock - 1 : product);

      tempState = tempState.map(product => product.name === payload.name ? { ...product, inStock: product.inStock - 1 } : product);

      let results = tempState.filter(product => product.category === activeCategory);
      console.log('is inventory for categories correct?', tempState);
      console.log(results);
      
      return results;

    case 'RESET':
      return initialState;
    default:
      return state;

  }
};

export default productReducer;
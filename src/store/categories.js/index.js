const initialState = {
  categories: [
    {name: 'electronics', displayName: 'Electronics', description: 'Electronics'},
    {name: 'food', displayName: 'Food', description: 'Food'},
  ],
  activeCategory: '',

  products: [
    {name:'electronics1', category: 'electronics', description: 'TV', price: 100, inventorycount: 5},
    {name: 'electronics2', category: 'electronics', description: 'Radio', price: 50, inventorycount: 10},
    {name: 'electronics3', category: 'electronics', description: 'Computer', price: 150, inventorycount: 15},
    {name: 'food1', category: 'food', description: 'Pizza', price: 5, inventorycount: 20},
    {name: 'food2', category: 'food', description: 'Tacos', price: 10, inventorycount: 25},
    {name: 'food3', category: 'food', description: 'Burgers', price: 15, inventorycount: 30},
  ]
}

function categoryReducer(state = initialState, action) {
  switch(action.type) {
    case 'ChangeCategory':
    return {
      ...state, activeCategory: action.payload
    } //confused on additional pieces needed here
    case 'ResetCategory':
    }
  }
    //actions
    export const changeCategory = (category) => {
      return {
        type: 'ChangeCategory',
        payload: category
      }
    };
    export const resetCategory = () => {
      return {
        type: 'ResetCategory',
        payload: '',
      } 
    };
  
    
    export default categoryReducer;
  
    


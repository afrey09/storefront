const initialState = {
  categories: [
    {name: 'books', displayName: 'Books', description: 'Books'},
    {name: 'food', displayName: 'Food', description: 'Food'},
  ],
  activeCategory: '',

  products: [
    {name: 'book1', category: 'books', description: 'Cooking101', price: 10, inventorycount: 5},
    {name: 'book2', category: 'books', description: 'Investing101', price: 20, inventorycount: 10},
    {name: 'book3', category: 'books', description: 'Dogs101', price: 30, inventorycount: 15},
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
  
    


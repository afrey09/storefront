export const set = (category) => {
  return {
    type: 'SET',
    payload: category
  }
}

export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}
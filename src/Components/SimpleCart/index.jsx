import { useSelector } from 'react-redux';

const Cart = () => {
  const { cart } = useSelector(state => state.cart);
  
  return (
    <ul>
      {cart.map((item, idx) => (
        <li key={idx}>{item.name}</li>
      ))}
    </ul>
  )
}

export default Cart;

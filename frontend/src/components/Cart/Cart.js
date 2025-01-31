import React from 'react';
import { useCart } from '../../contexts/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Quantité : {item.quantity}</p>
          <p>Prix : {item.price * item.quantity} €</p>
          <button onClick={() => removeFromCart(item.id)}>
            Supprimer
          </button>
        </div>
      ))}
      <p>Total : {total} €</p>
    </div>
  );
};

export default Cart;
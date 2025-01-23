import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div>
      <p>{item.name} - ${item.price} x {item.quantity}</p>
      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>Increase</button>
      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>Decrease</button>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;

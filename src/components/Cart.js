import React from 'react';
import CartItem from './CartItem';
import TotalPrice from './TotalPrice';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ))
      )}
      <TotalPrice cart={cart} />
    </div>
  );
};

export default Cart;

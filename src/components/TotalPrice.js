import React from 'react';

const TotalPrice = ({ cart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <h3>Total: ${totalPrice}</h3>;
};

export default TotalPrice;

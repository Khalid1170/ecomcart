import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

import './App.css';

const App = () => {
  // Initial products list
  const [products] = useState([
    { "id": 1, "name": "T-Shirt", "price": 20 },
    { "id": 2, "name": "Jeans", "price": 40 },
    { "id": 3, "name": "Sneakers", "price": 60 },
    { "id": 4, "name": "Hat", "price": 15 },
    { "id": 5, "name": "Socks", "price": 5 }
  ]);

  // Cart state
  const [cart, setCart] = useState([]);

  // Add a product to the cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove a product from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Update quantity of a product in the cart
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;  // Prevent negative quantity
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  return (
    <div>
      <h1>Simple E-Commerce Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
};

export default App;

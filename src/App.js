import React, { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Jeans", price: 40 },
  { id: 3, name: "Sneakers", price: 60 },
  { id: 4, name: "Hat", price: 15 },
  { id: 5, name: "Socks", price: 5 }
];

function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleQuantityChange = (productId, delta) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const productIndex = updatedCart.findIndex((item) => item.id === productId);
      if (productIndex !== -1) {
        const updatedProduct = updatedCart[productIndex];
        updatedProduct.quantity = Math.max(updatedProduct.quantity + delta, 0);
        if (updatedProduct.quantity === 0) {
          updatedCart.splice(productIndex, 1);
        }
      }
      return updatedCart;
    });
  };

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="card">
      <h1>Simple E-Commerce Cart</h1>
      <div className="three">
        <div className="list.detail">
          <div className="List">
            <h2>Product List</h2>
            <ul>
              {products.map((product) => (
                <p key={product.id} onClick={() => handleProductClick(product)}>
                  <span>{product.name} - ${product.price}</span>
                  <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </p>
              ))}
            </ul>
          </div>
          {selectedProduct && (
            <div className="Details">
              <h2>Product Details</h2>
              <p>Name: {selectedProduct.name}</p>
              <p>Price: ${selectedProduct.price}</p>
            </div>
          )}
        </div>
        <div className="cart">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map((product) => (
                <li key={product.id}>
                  {product.name} - ${product.price} x {product.quantity}
                  <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
                  <button onClick={() => handleQuantityChange(product.id, 1)}>+1</button>
                </li>
              ))}
            </ul>
          )}
          <p>Total Price: ${totalPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

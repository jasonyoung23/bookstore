import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    console.log("adding cart", book);
    setCartItems(prevItems => {
      const itemInCart = prevItems.find(item => item.id === book.id);
      if (itemInCart) {
        return prevItems.map(item => 
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } 
      return [...prevItems, { ...book, quantity: 1, totalPrice: book.unitPrice }];
    });
  };
  
  const removeFromCart = (bookId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== bookId));
  }

  const incrementQuantity = (bookId) => {
    setCartItems((prevItems) => prevItems.map((item) => 
      item.id === bookId ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.unitPrice } : item
    ));
  };

  const decrementQuantity = (bookId) => {
    setCartItems((prevItems) => prevItems.map((item) => {
      if (item.id === bookId) {
        const newQuantity = Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQuantity, totalPrice: newQuantity * item.unitPrice };
      }
      return item;
    }));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const CartContextFunction = ({ children }) => {
  const initialCartStorage = JSON.parse(localStorage.getItem('Cart')) || [];
  const [cartStorage, setCartStorage] = useState(initialCartStorage);
	const [cartQuantity, setCartQuantity] = useState(0);

  const cartStorageHandler = (product, quantity) => {
    const cartData = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: quantity,
			cartQuantity: 1,
    }

		const existProductInCart = initialCartStorage.some(product => product.id === cartData.id);
		if (existProductInCart) return alert('Product already in cart');
		const updatedCart = [...initialCartStorage, cartData];
		localStorage.setItem('Cart', JSON.stringify(updatedCart));
    setCartStorage(updatedCart);
  }

  return (
    <CartContext.Provider value={{ cartStorage, cartStorageHandler, cartQuantity, setCartQuantity}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextFunction;

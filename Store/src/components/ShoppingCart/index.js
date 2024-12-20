import React, { useState, useEffect, useContext } from 'react';
import ProductItem from './components/ProductItem/ProductItem';
import { CartContext } from '../../context/cart.context';
import PageTitle from '../../components/_common/PageTitle/index'
import { ShoppingCartGrid } from './cart.styled';

const ShoppingCart = () => {
  const { setCartQuantity } = useContext(CartContext);
  const [storedDataCart, setStoredDataCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("Cart"));
    storedData && setStoredDataCart(storedData);
  }, []);

  useEffect(() => {
    const totalPrice = storedDataCart.reduce((accumulator, product) => {
      return accumulator + (product.price * product.quantity);
    }, 0);
    
    const roundedTotalPrice = totalPrice.toFixed(2);
  
    setTotalPrice(roundedTotalPrice);
  }, [storedDataCart]);
  
  const removeProduct = (id) => {
    const filteredStoredDataCart = storedDataCart.filter(productId => productId.id !== id);
    localStorage.setItem("Cart", JSON.stringify(filteredStoredDataCart));
    setStoredDataCart(filteredStoredDataCart);
    setCartQuantity(prevQuantity => prevQuantity - 1);
  }

  return (
    <>
      <div className="shopping-cart">
        <PageTitle>Cart</PageTitle>
        {Boolean(storedDataCart.length) === false && <p>Shopping cart is empty</p>}

        <ShoppingCartGrid>
          {
            storedDataCart.map((cart, index) => (
              <ProductItem  
                key={cart.title + index}
                id={cart.id} 
                img={cart.image} 
                title={cart.title} 
                price={cart.price} 
                productQuantity={cart.quantity} 
                onRemoveProduct={removeProduct}
                updateTotalPrice={setTotalPrice} 
              />
            ))
          }
          
          {Boolean(storedDataCart.length) === true && <div className="total"><p>Total Price: <strong>{totalPrice} $</strong></p></div>}
        </ShoppingCartGrid>
      </div>
    </>
  );
}

export default ShoppingCart;

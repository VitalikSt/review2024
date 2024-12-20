import React, { useEffect, useContext  } from 'react';
import Navigation from './components/Navigation/Navigation';
import Container from '../_common/Container/index';
import { CartContext } from '../../context/cart.context';
import { WishlistContext } from '../../context/wishlist.context';

const Header = () => {
	const { cartStorage, cartQuantity, setCartQuantity } = useContext(CartContext);
	const { wishlistStorage, wishlistQuantity, setWishlistQuantity } = useContext(WishlistContext);

	useEffect(() => {
    let totalQuantity = 0;
    cartStorage.forEach(product => {
      totalQuantity += product.cartQuantity;
    });
    setCartQuantity(totalQuantity); 
  }, [cartStorage, setCartQuantity]);

	useEffect(() => {
    let totalQuantity = 0;
    wishlistStorage.forEach(product => {
      totalQuantity += product.quantity;
    });
    setWishlistQuantity(totalQuantity); 
  }, [wishlistStorage, setWishlistQuantity]);

  return (
    <>
			<Container>
				<Navigation wishlistQuantity={wishlistQuantity} cartQuantity={cartQuantity}/>
			</Container>
		</>
  );
}

export default Header;
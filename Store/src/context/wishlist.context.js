import React, { useState, createContext }  from 'react';

export const WishlistContext = createContext();

const WishlistContextFunction = ({ children }) => {
	const initialWishlistStorage = JSON.parse(localStorage.getItem('Wishlist')) || [];
	const [wishlistStorage, setWishlistStorage] = useState(initialWishlistStorage);
	const [wishlistQuantity, setWishlistQuantity] = useState(0);

	const wishlistStorageHandler = product => {
		const wishlistData = {
			id: product.id,
			title: product.title,
			image: product.image,
			price: product.price,
			quantity: 1
		}
	
		const existProductInWishlist = initialWishlistStorage.some(product => product.id === wishlistData.id);
		if (existProductInWishlist) return alert('Product already in wishlist');
		const updatedWishlist = [...initialWishlistStorage, wishlistData];
		localStorage.setItem('Wishlist', JSON.stringify(updatedWishlist));
		setWishlistStorage(updatedWishlist);
	}

	return <WishlistContext.Provider value={{wishlistStorage, wishlistStorageHandler, wishlistQuantity, setWishlistQuantity}}>{children}</WishlistContext.Provider>
};

export default WishlistContextFunction;
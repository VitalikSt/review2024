import React, { useEffect, useState, useContext } from "react";
import ProductCart from '../../components/_common/ProductCart/index';
import PageTitle from '../../components/_common/PageTitle/index';
import { Wrapper, WishlistPage } from "./wishlist.styled";
import { WishlistContext } from '../../context/wishlist.context';

const Wishlist = () => {
	const { setWishlistQuantity } = useContext(WishlistContext);
  const [wishlistStoredData, setWishlistStoredData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("Wishlist"));
    storedData && setWishlistStoredData(storedData);
  }, []);

	const removeProduct = (id) => {
		const filteredWishlistStoredData = wishlistStoredData.filter(productId => productId.id !== id);
		localStorage.setItem("Wishlist", JSON.stringify(filteredWishlistStoredData));
		setWishlistStoredData(filteredWishlistStoredData);
		setWishlistQuantity(prevQuantity => prevQuantity - 1);
	}

  return (
    <>
      <WishlistPage>
        <PageTitle>Wishlist</PageTitle>
        <Wrapper>
          {wishlistStoredData.map((product, index) => (
						<ProductCart key={product.title + index} product={product} removeFromWishlist={removeProduct} />
          ))}
        </Wrapper>
      </WishlistPage>
      {Boolean(wishlistStoredData.length) === false && <p>Wishlist is empty</p>}
    </>
  );
};

export default Wishlist;

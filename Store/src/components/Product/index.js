import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductInfo from './components/ProductInfo/ProductInfo';
import ProductImage from './components/ProductImage/ProductImage';
import ProductButtons from './components/ProductButtons/ProductButtons';
import Quantity from '../_common/Quantity/index';
import PageTitle from '../_common/PageTitle/index';
import { CartContext } from '../../context/cart.context';
import { WishlistContext } from '../../context/wishlist.context';
import { ProductWrapper, Price } from './product.styled';

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const {cartStorageHandler} = useContext(CartContext);
	const {wishlistStorageHandler} = useContext(WishlistContext);

	const quantityHander = event => setQuantity(event.target.value);

	const increment = () => setQuantity(quantity + 1);

	const decrement = () => {
		setQuantity(quantity - 1);
		quantity === 1 && setQuantity(1);
	}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const foundProduct = response.data.find(product => product.id.toString() === productId);
				foundProduct ? setProduct(foundProduct) : console.error('Product not found');
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, [productId]);

  return (
    <>
      {product ? (
        <>
				<PageTitle>{product.title}</PageTitle>
				 <ProductWrapper>
						<div className="col-1">
							<ProductImage image={product.image} />
						</div>
						<div className="col-2">
							<Price>{product.price}$</Price>
							<ProductButtons onAddToCart={() => cartStorageHandler(product, quantity)} onAddToWishlist={() => wishlistStorageHandler(product)}/>
							<Quantity value={quantity} increment={increment} decrement={decrement} onQuantityHander={quantityHander}/>
							<ProductInfo description={product.description}/>
						</div>
				 </ProductWrapper>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Product;

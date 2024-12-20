import React from 'react';
import Icon from '../../../_common/Icon/index';
import { Wrapper, Button } from './productButtons.styled';

const ProductButtons = ({ onAddToCart, onAddToWishlist}) => {

  return (
    <>
			<Wrapper>
				<Button onClick={onAddToCart}><Icon name="shopping-cart" width={22} height={22} fill="#fff" /> Add to cart</Button>
				<Button onClick={onAddToWishlist}><Icon name="heart" width={22} height={22} fill="#fff" /> Add to wishlist</Button>
			</Wrapper>
		</>
  );
}

export default ProductButtons;
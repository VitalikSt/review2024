import React from 'react';
import { Img } from './productImage.styled';

const ProductImage = ({ image }) => {

  return (
    <>
			<div className="product-image">
				<Img src={image} alt={image} />
			</div>
		</>
  );
}

export default ProductImage;
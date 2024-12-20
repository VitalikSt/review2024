import React from 'react';

const ProductInfo = ({ description, price }) => {

  return (
    <>
			<div className="info">
				<strong>{price}</strong>
				<p>{description}</p>
			</div>
		</>
  );
}

export default ProductInfo;
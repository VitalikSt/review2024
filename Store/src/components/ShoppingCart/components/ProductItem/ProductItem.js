import React, { useState } from 'react';
import Icon from '../../../_common/Icon/index';
import Quantity from '../../../_common/Quantity/index';
import { IMG, RemoveIcon, StyledLink, ProductWrapper, ProductInfo } from '../ProductItem/productItem.styled';

const ProductItem = ({ id, img, title, price, productQuantity, onRemoveProduct, updateTotalPrice }) => {
  const [quantity, setQuantity] = useState(productQuantity);
  const totalProductPrice = price * quantity;
  const roundedTotalPrice = totalProductPrice.toFixed(2);

  const quantityHandler = event => setQuantity(event.target.value);

  const increment = () => {
    setQuantity(quantity + 1);
    updateTotalPrice(prevTotalPrice => (parseFloat(prevTotalPrice) + price).toFixed(2));
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateTotalPrice(prevTotalPrice => (parseFloat(prevTotalPrice) - price).toFixed(2));
    }
  };

  return (
    <>
      <ProductWrapper id={id}>
        <RemoveIcon onClick={() => onRemoveProduct(id)}>
          <Icon name="remove" width={22} height={22} fill="#ED1C24" />
        </RemoveIcon>
        <ProductInfo>
          <StyledLink to={`/category/product/${id}`}>
            <IMG src={img} alt={img} />
          </StyledLink>
          <StyledLink to={`/category/product/${id}`}>
            {title}
          </StyledLink>
        </ProductInfo>
        <div className="price">
          <strong>{price} $</strong>
        </div>
        <div className="quantity">
          <Quantity value={quantity} increment={increment} decrement={decrement} onChange={quantityHandler}/>
        </div>
        <div className="total-price">
          <strong>{roundedTotalPrice} $</strong>
        </div>
      </ProductWrapper>
    </>
  );
}

export default ProductItem;

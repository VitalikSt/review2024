import React, { useContext } from 'react';
import Icon from '../../_common/Icon/index';
import { WishlistContext } from '../../../context/wishlist.context';
import { ProductCartCol, Image, Description, StyledLink, Button, PriceBlock, PriceButtons } from './productCart.styled';

const ProductCart = ({ product, removeFromWishlist }) => {
	const { wishlistStorageHandler } = useContext(WishlistContext);

  return (
    <>
			<ProductCartCol id={product.id}>
				<StyledLink to={`/category/product/${product.id}`}>
					<Image src={product.image} alt={product.image} />
				</StyledLink>
				<StyledLink to={`/category/product/${product.id}`}>{product.title}</StyledLink>
				<Description>{product.description}</Description>
				<PriceBlock>
					<strong>{product.price} $</strong>
					<PriceButtons>
						<Button className="wishlist-remove" onClick={() => removeFromWishlist(product.id)}>
							<Icon name="remove" width={22} height={22} fill="#ED1C24" />
						</Button>
						<Button className="wishlist-add" onClick={() => wishlistStorageHandler(product)}>
							<Icon name="heart" width={22} height={22} fill="#198754" />
						</Button>
						<Button>
						<StyledLink to={`/category/product/${product.id}`}>
							<Icon name="shopping-cart" width={22} height={22} fill="#198754" />
						</StyledLink>
						</Button>
					</PriceButtons>
				</PriceBlock>
			</ProductCartCol>
		</>
  );
}

export default ProductCart;
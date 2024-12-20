import React from 'react';
import Icon from '../../../_common/Icon/index';
import { Link } from 'react-router-dom';
import { NAVIGATION_TEMPLATE } from '../../const';
import { NavigationStyled, Wrapper, Quantity } from './navigation.styled';

const Navigation = ({ wishlistQuantity, cartQuantity }) => {

  return (
    <>
      <Wrapper>
        <div>
          <NavigationStyled>
            <ul>
              {NAVIGATION_TEMPLATE.slice(0, 2).map((nav, index) => (
                <li key={index + nav.name}>
                  <Link to={nav.url} aria-label={nav.name}>{nav.name}</Link>
                </li>
              ))}
            </ul>
          </NavigationStyled>
        </div>
        <div>
          <NavigationStyled>
            <ul>
              <li>
                <Link to="/wishlist" aria-label="Wishlist">
                  <Icon name="heart" width={22} height={22} fill="#198754" />
                </Link>
                <Quantity>({wishlistQuantity})</Quantity>
              </li>
              <li>
                <Link to="/shopping-cart" aria-label="Cart">
                  <Icon name="shopping-cart" width={22} height={22} fill="#198754" />
                </Link>
                <Quantity>({cartQuantity})</Quantity>
              </li>
            </ul>
          </NavigationStyled>
        </div>
      </Wrapper>
    </>
  );
};

export default Navigation;

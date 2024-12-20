import React from 'react';
import { Routes, Route } from "react-router-dom";
import Container from '../_common/Container/index';
import Header from '../Header/index';
import Home from '../../pages/Home';
import PageNotFound from '../../pages/Page404';
import ProductPage from '../../pages/Product';
import Category from '../../pages/Category';
import Wishlist from '../../pages/Wishlist';
import ShoppingCartPage from '../../pages/ShoppingCart';


const App = () => {
  return (
    <>
			<Header />
			<Container>
			<main>
				<Routes>
					<Route path="/" element={<Home/>}></Route>
					<Route path="*" element={<PageNotFound />} />
					<Route path="/category" element={<Category />} />
					<Route path="/wishlist" element={<Wishlist />} />
					<Route path="/shopping-cart" element={<ShoppingCartPage />} />
					<Route path="/category/product/:productId" element={<ProductPage />} />
				</Routes>
			</main>
			</Container>
		</>
  );
}

export default App;
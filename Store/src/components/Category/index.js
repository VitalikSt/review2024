import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCart from '../../components/_common/ProductCart/index';
import PageTitle from '../../components/_common/PageTitle/index';
import Sidebar from './components/Sidebar/Sidebar';
import { CategoryWrapper, CategoryGrid } from './category.styled';

const Category = () => {
	const [categoryCart, setCategoryCart] = useState([]);
	const [categories, setCategories] = useState([]);
  const [filteredCategorys, setFilteredCategorys] = useState(new Set());

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://fakestoreapi.com/products'
		}

		axios.request(options).then(response => {
			setCategoryCart(response.data);
			const uniqueCategories = [...new Set(response.data.map(product => product.category))];
      setCategories(uniqueCategories);
		})
		.catch(error => {
			console.log('Error', error);
		});
	}, [])

  const filterButtonHandler = selectedCategory => {
    const updatedFilteredCategories = new Set(filteredCategorys);
		updatedFilteredCategories.has(selectedCategory) ? updatedFilteredCategories.delete(selectedCategory) : updatedFilteredCategories.add(selectedCategory);
    setFilteredCategorys(updatedFilteredCategories);
  }

	const filteredProducts = filteredCategorys.size > 0 ? categoryCart.filter(product => filteredCategorys.has(product.category)) : categoryCart;

  return (
    <>
			<PageTitle>Category</PageTitle>
			<CategoryWrapper>
				<Sidebar categories={categories} onFilterButtonHandler={filterButtonHandler} />
				<CategoryGrid>
					{filteredProducts.length > 0 ? (
						filteredProducts.map((product, index) => (
							<ProductCart 
								key={index + product.price} 
								product={product}
							/>
						))
					) : (
							<p>Loading...</p>
						)
					}
				</CategoryGrid>
			</CategoryWrapper>
		</>
  );
}

export default Category;
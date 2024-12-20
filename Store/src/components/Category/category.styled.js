import styled from 'styled-components';

export const CategoryWrapper = styled.div`
	display: grid;
	grid-template-columns: 20% 80%;
	grid-column-gap: 1rem;
	margin-bottom: 2rem;
	.wishlist-remove {
		display: none;
	}
`;

export const CategoryGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
`;
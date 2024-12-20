import styled from 'styled-components';

export const ProductWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 1rem;
	margin-top: 2.5rem;
`;

export const Price = styled.strong`
  display: block;
	margin-bottom: 1rem;
	font-size: 18px;
`;
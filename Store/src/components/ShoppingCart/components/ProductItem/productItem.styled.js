import styled from 'styled-components';
import { Link } from "react-router-dom";
import { colors } from '../../../../assets/theme-variables/index';

export const Title = styled.h1`
  font-size: 1.6rem;
	margin-top: 1.5rem;
`;

export const IMG = styled.img`
  width: 150px;
	height: 150px;
	object-fit: contain;
	margin-right: 10px;
`;

export const RemoveIcon = styled.div`
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  color: ${colors.info}; 
	margin: .5rem 0;
  text-decoration: none;
	display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
	flex-grow: 1;
`;

export const ProductWrapper = styled.div`
	display: grid;
  grid-template-columns: 4% 43% 10% 22% 21%;
	align-items: center;
	margin-bottom: 1.5rem;
	padding: 10px;
	border: 1px solid #0ba085;
	border-radius: .25rem;
`;

export const ProductInfo= styled.div`
	display: flex;
  align-items: center;
`;
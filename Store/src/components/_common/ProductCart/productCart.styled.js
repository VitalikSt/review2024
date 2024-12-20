import styled from 'styled-components';
import { Link } from "react-router-dom";
import { colors } from '../../../assets/theme-variables/index';

export const ProductCartCol = styled.div`
	display: flex;
  flex-direction: column;
	border: 1px solid ${colors.paoloVeroneseGreen};
	border-radius: 3px;
	padding: 10px;
`;

export const Image = styled.img`
	width: 250px;
	height: 250px;
	object-fit: contain;
`;

export const Description = styled.p`
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden; 
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

export const Button = styled.button`
  margin: 0 .5rem;
	cursor: pointer;
	background: #fff;
  border: 0;
	padding: 0;
`;

export const PriceBlock = styled.div`
	display: flex;
  justify-content: space-between;
	align-items: center;
  margin-top: 1.4rem;
`;

export const PriceButtons = styled.div`
	display: flex;
	align-items: center;
`;
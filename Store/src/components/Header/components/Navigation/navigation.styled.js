import styled from 'styled-components';
import { colors } from '../../../../assets/theme-variables/index';

export const NavigationStyled = styled.nav`
	ul {
		display: flex;
		list-style: none;
		padding: 0;
		li {
			display: flex;
			margin-right: 1.7rem;
			a {
				text-decoration: none;
				font-weight: 500;
				color: ${colors.success};
			}
		}
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Quantity  = styled.span`
	font-weight: 500;
	color: ${colors.success};
	margin-left: .5rem;
`;

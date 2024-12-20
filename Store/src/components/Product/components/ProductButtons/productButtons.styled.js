import styled from 'styled-components';
import { colors } from '../../../../assets/theme-variables/index';

export const Wrapper = styled.div`
	display: flex;
	margin: 1.5rem 0;
`;

export const Button = styled.button`
	display: flex;
  align-items: center;
	font-size: 14px;
	color: ${colors.white};
	background: ${colors.success};
	margin-right: 1rem;
  padding: .375rem .75rem;
	border-radius: .25rem;
	border: 0;
	cursor: pointer;
	svg {
		margin-right: .5rem;
	}
`;
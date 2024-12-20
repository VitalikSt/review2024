import { createGlobalStyle } from 'styled-components';
import { baseStyle } from '../../assets/theme-variables';

export const GlobalStyles = createGlobalStyle`
	body {
		font-family: ${baseStyle.fontFamily};
		font-size:  ${baseStyle.fontSize};
		color: ${baseStyle.color};
		margin: 0;
	}

	p {
		margin: .67rem 0;
	}

	img {
		max-width: 100%;
		height: auto;
	}

	::placeholder {
		font-family: ${baseStyle.fontFamily};
		font-size: 1rem;
		color: ${baseStyle.color};
		opacity: 1;
	}
`;
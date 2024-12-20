import React from 'react';
import styled from 'styled-components';

const PageTitle = ({ children }) => {
  return (
    <Wrapper>{ children }</Wrapper>
  );
}

export default PageTitle;

const Wrapper = styled.h1`
	font-size: 1.6rem;
	margin-top: 1.5rem;
`;
import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return (
    <Wrapper>{ children }</Wrapper>
  );
}

export default Container;

const Wrapper = styled.div`
	max-width: 1170px;
	padding: 0 .75rem;
	margin: 0 auto;
`;
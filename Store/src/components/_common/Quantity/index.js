import React from 'react';
import { Input, Button, Wrapper } from './quantity.styled';

const Quantity = ({ value, increment, decrement, onQuantityHander }) => {
  return (
    <>
			<Wrapper>
				<Button onClick={decrement}>-</Button>
				<Input type="text" name='input' readOnly value={value} onChange={onQuantityHander}/>
				<Button onClick={increment}>+</Button>
			</Wrapper>
		</>
  );
}

export default Quantity;
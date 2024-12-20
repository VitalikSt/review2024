import React from 'react';
import { Label, ControlsWrap, Input } from './sidebarControls.styled.js'

const SidebarControls = ({ names, onFilterButtonHandler }) => {
  return (
    <>
			<ControlsWrap>
				<Input type="checkbox" id={names} onChange={() => onFilterButtonHandler(names)}/>
				<Label htmlFor={names}>{names}</Label>
			</ControlsWrap>
		</>
  );
}

export default SidebarControls;
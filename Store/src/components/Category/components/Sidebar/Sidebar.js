import React from 'react';
import SidebarControls from '../SidebarControls/SidebarControls';

const Sidebar = ({ categories, onFilterButtonHandler }) => {

  return (
    <>
			<div className="sidebar">
				<h3>Sidebar</h3>
				{
					categories.map((categories, index) => (
						<SidebarControls key={categories + index} names={categories} onFilterButtonHandler={onFilterButtonHandler}/>
					))
				}
			</div>
		</>
  );
}

export default Sidebar;
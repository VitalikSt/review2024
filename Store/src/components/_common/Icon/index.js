import React from "react";
import { ReactComponent as HeartIcon } from '../../../assets/images/icons/heart.svg';
import { ReactComponent as CartIcon } from '../../../assets/images/icons/shopping-cart.svg';
import { ReactComponent as RemoveIcon } from '../../../assets/images/icons/remove.svg';

const ICONS = {
  'heart': HeartIcon,
	'shopping-cart': CartIcon,
	'remove': RemoveIcon,
};

const Icon = ({ name, width, height, fill }) => {
  const SvgIcon = ICONS[name];

	if (!SvgIcon) return null;

  return <SvgIcon width={width} height={height} fill={fill} />;
};

export default Icon;

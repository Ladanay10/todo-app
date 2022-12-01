import React from 'react';
import cl from './checkBox.module.css';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { RiCheckboxCircleFill } from 'react-icons/ri';
export const CheckBox = ({ onClick, complete }) => {
	return (
		<div className={cl.checkBox} onClick={onClick}>
			{
				complete
					?
					<RiCheckboxBlankCircleLine size={22} className={cl.icon} />
					:
					<RiCheckboxCircleFill size={22} className={cl.completeIcon} />
			}
		</div>
	)
}

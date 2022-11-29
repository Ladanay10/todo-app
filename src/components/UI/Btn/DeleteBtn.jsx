import React from 'react';
import cl from './btn.module.css'
import {HiOutlineTrash} from 'react-icons/hi';
export const DeleteBtn = ({ onClick }) => {
	return (
		<HiOutlineTrash
			size={20}
			onClick={onClick}
			className={cl.deleteBtn}
		/>
	)
}

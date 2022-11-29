import React from 'react';
import cl from './btn.module.css';
import plus from '../../../assets/plus.svg';
export const Btn = ({ children }) => {
	return (
		<button className={cl.btn}>
			{children} <img src={plus} alt="icon" />
		</button>
	)
}

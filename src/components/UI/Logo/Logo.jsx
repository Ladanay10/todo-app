import React from 'react'
import logo from '../../../assets/Logo.svg';
import cl from './logo.module.css';
export const Logo = () => {
	return (
		<div className={cl.logo}>
			<img src={logo} className={cl.img} alt="logo" />
		</div>

	)
}

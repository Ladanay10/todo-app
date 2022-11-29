import React from 'react'
import cl from './input.module.css';
export const Input = ({ value, onChange,type, placeholder }) => {
	return (
		<input 
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={cl.input}
		/>
	)
}

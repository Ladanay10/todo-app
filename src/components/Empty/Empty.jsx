import React from 'react';
import cl from './empty.module.css';
import img1 from '../../assets/Clipboard.svg';
export const Empty = () => {
  return (
	<div className={cl.empty}>
		<img src={img1} alt="clipboard" />
		<div className={cl.text}>
			<span className={cl.bold}>У вас немає завдань</span>
			Створюйте та виконуйте свої справи
		</div>
	</div>
  )
}

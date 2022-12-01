import React, { useState } from 'react';
import cl from './task.module.css';

import { DeleteBtn } from '../Btn/DeleteBtn';
import { CheckBox } from '../CheckBox/CheckBox';

export const Task = ({ task, removeTask, handleComplete }) => {
	const [complete, setComplete] = useState(true);
	const handleClick = () => {
		setComplete(!complete);
		const check = (task.completed) = complete;
		handleComplete(check);
	}
	return (
		<div key={task.id} className={cl.task}>
			<CheckBox complete={complete} onClick={handleClick} />
			<p className={complete ? cl.text : cl.text_comp}>{task.text}</p>
			<DeleteBtn onClick={() => removeTask(task)} />
		</div>
	)
}

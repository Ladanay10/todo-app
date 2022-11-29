import React, { useState } from 'react';
import cl from './task.module.css';

import { DeleteBtn } from '../Btn/DeleteBtn';
import { CheckBox } from '../CheckBox/CheckBox';

export const Task = ({ task, removeTask, handleComplete }) => {
	const [complete, setComplete] = useState(task.completed);
	const handleClick = () => {
		setComplete(!complete);
		const newS = (task.completed) = complete;
		handleComplete(newS);
	}

	return (
		<div key={task.id} className={cl.task}>
			<CheckBox complete={complete} onClick={handleClick} />
			<p className={complete ? cl.text_comp : cl.text}>{task.text}</p>
			<DeleteBtn onClick={() => removeTask(task)} />
		</div>
	)
}

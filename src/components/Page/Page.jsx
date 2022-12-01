import React, { useState } from 'react';
import cl from './page.module.css';
import { Task } from '../UI/Task/Task';
import { Input } from '../UI/Input/Input';
import { Btn } from '../UI/Btn/Btn';
import { Empty } from '../Empty/Empty';
export const Page = () => {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([]);
	const handleChange = (e) => {
		setInput(e.target.value);
	}
	const handleSubmit = (e) => {
		setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
		e.preventDefault();
		setInput('');
	}
	const removeTask = (todo) => {
		setTodos(todos.filter(id => id !== todo))
	}
	const handleComplete = (todo_comp) => {
		setTodos(todos.filter(completed => completed !== todo_comp))
	}

	return (
		<div>
			<form onSubmit={handleSubmit} action="">
				<Input onChange={handleChange} value={input} type="text" placeholder='Введіть ваше завдання...' />
				<Btn>Добавити</Btn>
			</form>

			<div className={cl.tasks}>
				<div className={cl.bottom_text}>
					<p>Всіх завдань: <span className={cl.num}>{todos.length}</span></p>
					<p>Виконаних: <span className={cl.num}>{todos.filter((item) => item.completed === true).length} з {todos.length} </span></p>
				</div>

				{todos.map((item) => (
					<Task
						todos={todos}
						key={item.id}
						handleComplete={handleComplete}
						task={item}
						removeTask={removeTask}
					/>
				))}
				{
					todos.length === 0 && (
						<Empty />
					)
				}

			</div>
		</div>
	)
}

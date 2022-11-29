import React, { useState } from 'react';
import cl from './page.module.css';
import { Task } from '../UI/Task/Task';
import { Input } from '../UI/Input/Input';
import { Btn } from '../UI/Btn/Btn';
import { Empty } from '../Empty/Empty';
export const Page = () => {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([]);
	// const [complete, setComplete] = useState(false);
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
					Всіх завдань: <span className={cl.num}>{todos.length}</span>

				</div>

				{todos.map((item) => (
					<Task
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
			{/* Тут я просто перевіряв чи змінюється значення в масиві(setTodos). Для цього і створив функцію handleComplete. 
			Правда воно ітак не фуричить норм, тому я хз */}
			{
				todos.map((item) => (
					<div key={item.id}>{item.completed ? <h1>True</h1> : <h1>False</h1>} </div>
				))
			}

		</div>
	)
}

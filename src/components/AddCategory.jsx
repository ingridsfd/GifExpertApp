import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = (event) => {
		// console.log(event.target.value);
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		// console.log(event);
		event.preventDefault(); //para que no pueda refrescarse
		// console.log(inputValue);
		if (inputValue.trim().length <= 1) return;
		//tarea: hacer el setCategories
		// setCategories((categories) => [inputValue, ...categories]);
		onNewCategory(inputValue.trim());
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Buscar gifs"
				value={inputValue}
				onChange={(event) => onInputChange(event)}
			/>
		</form>
	);
};

import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
	//mantener un hook de React para mantener el estado
	//no poner en condicionales los hooks de hook state o effect
	const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

	const onAddCategory = (newCategory) => {
		// console.log(newCategory);
		// categories.push(newCategory);
		setCategories([newCategory, ...categories]);
		//setCategories (cat => [...cat, 'valorant']);
	};

	return (
		<>
			{/* titulo */}
			<h1>GifExpertApp</h1>

			{/* input cada componente debe tener una responsabilidad unica*/}
			<AddCategory
				// setCategories={setCategories}
				onNewCategory={(value) => onAddCategory(value)}
			/>

			{/* Si nos piden varios inputs podemos simplemente duplicarlos*/}

			{/* Listado de Gif */}

			<ol>
				{categories.map((category) => {
					return <li key={category}>{category}</li>;
				})}
			</ol>

			{/* Gif Item */}
		</>
	);
};

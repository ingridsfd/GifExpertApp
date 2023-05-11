import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	//mantener un hook de React para mantener el estado
	//no poner en condicionales los hooks de hook state o effect
	const [categories, setCategories] = useState(['One Punch']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;

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

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}

			{/* Gif Item */}
		</>
	);
};

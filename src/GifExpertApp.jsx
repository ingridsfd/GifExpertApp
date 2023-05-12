import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import Giphylogo from './imgs/Poweredby_100px-White_VertText.png';

export const GifExpertApp = () => {
	//mantener un hook de React para mantener el estado
	//no poner en condicionales los hooks de hook state o effect
	const [categories, setCategories] = useState(['Mob Psycho 100']);

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
			<h1>Gif Search App Practice</h1>
			<img alt="Giphy-credits" src={Giphylogo} />
			<h4>
				@Ingridsfd. Go! Try to look for some gifs! Something like: Sailor Moon
				or Snorlax!
			</h4>
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

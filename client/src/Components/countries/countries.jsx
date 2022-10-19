import React from 'react';
import { useSelector } from 'react-redux';
import Country from './country.jsx';

const Countries = () => {
	const countries = useSelector((state) => state.countries);
	console.log(countries)
	return(
		<div>{
			countries.map((c) => (
				<div key={c.id}>
				    <Country
				    id={c.id}
				    name={c.name}
				    flag_image={c.flag_image}
				    continent={c.continent}
				    />
				</div>
				    ))
		}</div>
		);
};

export default Countries;
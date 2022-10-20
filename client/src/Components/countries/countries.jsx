import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Country from './country.jsx';
import s from './countries.module.css'

const Countries = () => {

	const countries = useSelector((state) => state.countries);

	const [ pagActual, setPagActual ] = useState(0);

	const primeraPag = () => {
		setPagActual(0);
	};

	const ultimaPag = () => {
		setPagActual(countries.length - 10);
	};	

	let pagSiguiente = () => {
		if(countries.length <= pagActual + 10) setPagActual(pagActual);

		setPagActual(pagActual - 10);
	};

	let pagAnterior = () => {
		if(pagActual < 9) setPagActual(0);

		setPagActual(pagActual - 10);
	};

	useEffect(() => {
		primeraPag()
	}, [countries]);

	const countriesByPag = countries.slice(pagActual, pagActual + 10);

	return(
		<div className={s.dirr} >
		<div className={s.dir} >{
			countriesByPag.map((c) => (
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

		<div>

		<button onClick={primeraPag} >Inicio</button>
		<button onClick={pagActual} >{ '<--' }</button>
		<button onClick={pagSiguiente} >{ '-->' }</button>
		<button onClick={ultimaPag} >Ultima Pagina</button>

		</div>

		</div>
		);
};

export default Countries;
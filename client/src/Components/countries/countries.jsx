import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../Redux/actions.js'
import Country from './country.jsx';
import s from './countries.module.css'

const Countries = () => {

	const allCountries = useSelector((state) => state.allCountries);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCountries());
	}, [dispatch])

	const [ pagActual, setPagActual ] = useState(0);

	const primeraPag = () => {
		setPagActual(0);
	};

	const ultimaPag = () => {
		setPagActual(allCountries.length - 10);
	};	

	let pagSiguiente = () => {
		if(allCountries.length <= pagActual + 10) setPagActual(pagActual);

		setPagActual(pagActual + 10);
	};

	let pagAnterior = () => {
		if(pagActual < 9) setPagActual(0);

		setPagActual(pagActual - 10);
	};


	let countriesByPag = allCountries.slice(pagActual, pagActual + 10);

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
		<button onClick={pagAnterior} >{ '<--' }</button>
		<button onClick={pagSiguiente} >{ '-->' }</button>
		<button onClick={ultimaPag} >Ultima Pagina</button>

		</div>

		</div>
		);
};

export default Countries;
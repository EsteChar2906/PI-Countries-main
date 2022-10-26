import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, loading } from '../../Redux/actions.js'
import Country from './country.jsx';
import s from './countries.module.css'

const Countries = () => {

	const allCountries = useSelector((state) => state.allCountries);
	const loadinggif = useSelector((state) => state.loading)

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loading());
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
		if(pagActual < 9)  setPagActual(0);

		setPagActual(pagActual - 10);
	};


	let countriesByPag = allCountries.slice(pagActual, pagActual + 10);

	return(
		<div className={s.content} >
		<div className={s.column2} >
		{loadinggif? <img className={s.gif} src="https://i.pinimg.com/originals/77/58/a8/7758a8ddaea8e34e58d407d8489940a0.gif"  alt="Cargando" /> :
			countriesByPag.map((c) => (
				    <Country
				    key={c.id}
				    id={c.id}
				    name={c.name}
				    flag_image={c.flag_image}
				    continent={c.continent}
				    />
				    ))
		}</div>

		<div className={s.pagination}>

		<button className={s.buttonPage} onClick={primeraPag} type="button" >Inicio</button>
		<button className={s.buttonPage} onClick={pagAnterior} >{ '<--' }</button>
		<button className={s.buttonPage} onClick={pagSiguiente} >{ '-->' }</button>
		<button className={s.buttonPage} onClick={ultimaPag} >Ultima Pagina</button>

		</div>

		</div>
		);
};

export default Countries;
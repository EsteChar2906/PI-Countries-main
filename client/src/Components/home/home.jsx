import React, { useEffect } from 'react';
import { getCountries } from '../../Redux/actions.js';
import Countries from '../countries/countries.jsx';
import NavBar from '../navBar/navBar.jsx'
import { useDispatch } from 'react-redux';
import s from './home.module.css'

const Home = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCountries());
	}, [dispatch])

	return (

		<div className={s.fondoo}>
		    <div>
		        <NavBar />
		    </div>

		    <div>
		        <Countries />
		    </div>
		</div>

		);
};

export default Home;
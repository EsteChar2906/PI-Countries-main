import React, { useEffect } from 'react';
import { getCountries } from '../../Redux/actions.js';
import Countries from '../countries/countries.jsx';
import NavBar from '../navBar/navBar.jsx'
import { useDispatch } from 'react-redux';

const Home = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCountries());
	}, [dispatch])

	return (

		<div>
		    <div>
		        <NavBar />
		    </div>

		    <div >
		        <Countries />
		    </div>
		</div>

		);
};

export default Home;
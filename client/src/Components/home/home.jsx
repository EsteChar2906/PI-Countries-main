import React from 'react';
import Countries from '../countries/countries.jsx';
import NavBar from '../navBar/navBar.jsx'
import s from './home.module.css'

const Home = () => {

	return (

		<div className={s.fondoo}>
		    <NavBar />
		    <div>
		        <Countries />
		    </div>
		</div>

	);
};

export default Home;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import SearchBar from '../searchBar/searchBar.jsx'
import {
	getCountries,
	filByContinent,
	filByActivities,
	ordAlphaAZ,
	ordAlphaZA,
	ordPopCre,
	ordPopDec
} from '../../Redux/actions.js'


const NavBar = (props) => {

	const [ catalog, setCatalog ] = useState('');
	const [ continent, setContinent ] = useState('');
	const [ activity, setActivity ] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		if(continent) {
			props.getCountries();
			if(continent !== 'all continents'){
				setTimeout(() => {
					dispatch(props.filByContinent(continent));
				}, 1000)
			}
		}
	}, [continent])

	useEffect(() => {
		if(catalog === 'disorderly'){
			props.getCountries();
		} 
		else if(catalog === 'A-Z'){
			props.ordAlphaAZ();
		}
		else if(catalog === 'Z-A'){
			props.ordAlphaZA();
		}
		else if(catalog === 'Pop lower-higher'){
			props.ordPopCre();
		}
		else if(catalog === 'Pop higher-lower'){
			props.ordPopDec();
		}
	}, [catalog])

	const activityHandler = (e) => {
		e.preventDefault();

		setActivity(e.target.value);
	};

	const searchActivityHandler = (e) = > {
		e.preventDefault();

		getCountries();
		setTimeout(() => {
			dispatch(filByActivities(activity))
		}, 1000);


		setActivity("");
	}



	return(
		<div>
		 	<Link to="/">
		 	Pagina Principal
		 	<Link>

		 	<div>
		 	<label for="catalog">Catalog by</label>
		 	<select 
		 	id="catalog"
		 	name="catalog"
		 	onChange={(e) => setCatalog(e.target.value)}>
		 	<option value="disorderly">All</option>
		 	<option value="A-Z">A - Z</option>
		 	<option value="Z-A">Z - A</option>
		 	<option value="Pop lower-higher">Pop lower-higher</option>
		 	<option value="Pop higher-lower">Pop higher-lower</option>
		 	</select>

		 	<SearchBar />

		 	</div>
		 	<div>
		 	<label for="continent">Catalog by Continent</label>
		 	<select 
		 	id="continent"
		 	name="continent"
		 	onChange={(e) => setContinent(e.target.value)}>
		 	<option value="disorderly">All</option>
		 	<option value="Africa">Africa</option>
		 	<option value="Americas">Americas</option>
		 	<option value="Asia">Asia</option>
		 	<option value="Europa">Europa</option>
		 	<option value="Oceania">Oceania</option>
		 	</select>
		 	</div>

		 	<div>
		 	<form onSubmit={() => searchActivityHandler()}>
		 	<input
		 	type="text"
		 	value={activity}
		 	placeholder="Enter the name of the activity."
		 	onChange={() => activityHandler()}
		 	/>
		 	<button type="submit">Search</button> 
		 	</div>

		 	<div>
		 	<p>If you have already traveled to earth and cannot find the activity, click here to create it...
		 	<Link to="/activities" >Create new activity</Link>
		 	</p>
		 	</div>
		</div>
		); 
};

const mapDispatchToProps = (dispatch) => {
	return {
		getCountries: () => dispatch(getCountries());
		filByContinent: () => dispatch(filByContinent());
		filByActivities: () => dispatch(filByActivities());
		ordAlphaAZ: () => dispatch(ordAlphaAZ());
		ordAlphaZA: () => dispatch(ordAlphaZA());
		ordPopCre: () => dispatch(ordPopCre()());
		ordPopDec: () => dispatch(ordPopDec());

	};
};

const mapStateToProps = (state) => {
	return {
		countries: state.countries,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
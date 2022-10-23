import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../searchBar/searchBar.jsx'
import {
	getActivity,
	filByContinent,
	filByActivity,
	ordAlpha,
	ordByPopul
} from '../../Redux/actions.js'


const NavBar = () => {

	const allActivities = useSelector(state => state.allActivities);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(filByActivity());
	}, [dispatch]);

	const alphaHandler = (e) =>{
		e.preventDefault();
		dispatch(ordAlpha(e.target.value));
	};

	const continentHandler = (e) =>{
		e.preventDefault();
		dispatch(filByContinent(e.target.value));
	};

	const populationHandler = (e) =>{
		e.preventDefault();
		dispatch(ordByPopul(e.target.value));
		console.log(e.target.value)
	};

	const activityHandler = (e) =>{
		e.preventDefault();
		dispatch(filByActivity(e.target.value));
	};

	useEffect(() => {
		dispatch(getActivity())
	}, [dispatch]);

	return(
		<div>
		 	<Link to="/">
		 	Pagina Principal
		 	</Link>

		 	<div>
		 	<label htmlFor="population">Ordenar por poblacion</label>
		 	<select 
		 	id="population"
		 	name="population"
		 	onChange={populationHandler}>
		 	<option value="disorderly" key="disorderly">Disorderly</option>
		 	<option value="menor" key="menor">Pop lower-higher</option>
		 	<option value="mayor" key="mayor">Pop higher-lower</option>
		 	</select>
		 	</div>

		 	<div>
		 	<label htmlFor="alpha">Ordenar alfabeticamente</label>
		 	<select 
		 	name="alpha" 
		 	id="alpha"
		 	onChange={alphaHandler}>
		 	<option value="All" >All</option>
		 	<option value="A-Z" key='A-Z'>A - Z</option>
		 	<option value="Z-A" key='Z-A'>Z - A</option>
		 	</select>
		 	</div>

		 	<div>
		 	<SearchBar />
		 	</div>

		 	<div>
		 	<label htmlFor="continent">Catalog by Continent</label>
		 	<select 
		 	id="continent"
		 	name="continent"
		 	onChange={continentHandler}>
		 	<option value='all continents' key='all continents'>All continents</option>
		 	<option value="Africa" key='Africa'>Africa</option>
		 	<option value="Antarctica" key='Antarctica'>Antarctica</option>
		 	<option value="Asia" key='Asia'>Asia</option>
		 	<option value="Europe" key='Europe'>Europe</option>
		 	<option value="North America" key="North America">North America</option>
		 	<option value="Oceania" key='Oceania'>Oceania</option>
		 	<option value="South America" key='South America'>South America</option>
		 	</select>
		 	</div>

		 	<div>
		 	<label htmlFor="activity">Select activity</label>
		 	<select 
		 	name="activity" 
		 	id="activity"
		 	onChange={activityHandler}>
		 	<option value="all activities" key='all activities'>All activities</option>
		 	{allActivities.map((a) => (
		 		<option value={a.name} key={a.name}>{a.name}</option>
		 		))} 
		 	</select>
		 	</div>

		 	<div>
		 	<p>If you have already traveled to earth and cannot find the activity, click here to create it...
		 	<Link to="/activities" >Create new activity</Link>
		 	</p>
		 	</div>
		</div>
		); 
};


export default NavBar;
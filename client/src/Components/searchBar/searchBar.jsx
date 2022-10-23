import React from 'react';
import { useDispatch } from 'react-redux';
import { getCountryName } from '../../Redux/actions.js';


const SearchBar = () => {

	const dispatch = useDispatch();

	const handlerInput = (e) => {
		e.preventDefault();
		dispatch(getCountryName(e.target.value));
	};

	return (

		<div>
		  <input
		  type="text"
		  placeholder="Name of Country"
		  name="input"
		  onChange={handlerInput}
		  />

		</div>

		);

};

export default SearchBar;
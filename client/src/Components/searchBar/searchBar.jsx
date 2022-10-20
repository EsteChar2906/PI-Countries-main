import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryName } from '../../Redux/actions.js';


const SearchBar = () => {

	const [ name, setName ] = useState("");

	const dispatch = useDispatch();

	const onClikcHandler = () => {
		dispatch(getCountryName(name))
	};

	const nameHandler = (e) => {
		setName(e.target.value);
	};

	return (

		<div>
		
		  <input
		  type="text"
		  placeholder="Name of Country"
		  name="name"
		  autocomplete="off"
		  onChange={(e) => nameHandler(e)}
		  />

		 <div>
		   <button onClick={() => onClikcHandler()}>
		   Search
		   </button>
		 </div>

		</div>

		);

};

export default SearchBar;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createActivity, getCountries, getActivity } from '../../Redux/actions.js';


const validate = (input) => {
	let error = {};
	if(!input.name){
		error.name = "Se requiere un nombre"
	}
	return error;
};


const NewActivity = () => {

	const countries = useSelector((state) => state.allCountries);
	const countriesOrdenadas = countries.sort((a, b) => a.name.localeCompare(b.name));

	const [error, setError] = useState({});

	const [ input, setInput] = useState({
		name: '',
		difficulty: '',
		duration: '',
		season: '',
		codeCountry: []
	});

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCountries())		
	}, [dispatch]);

	useEffect(() => {
		dispatch(getActivity())
	}, [dispatch]);

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		})
		setError(validate({
			...input,
			[e.target.name]: e.target.value
		}))
	};

	const selectHandle = (id) => {
		setInput({
			...input,
			codeCountry: [...input.codeCountry, id.target.value]
		})
	};

	const seasonHandle = (e) => {
		setInput({
			...input,
			season: e.target.value
		})
	};

	const difficultyHandle = (e) => {
		setInput({
			...input,
			difficulty: e.target.value
		})
	};

	const durationHandle = (e) => {
		setInput({
			...input,
			duration: e.target.value
		})
	};

	const deleteHandle = (e) =>  {
		setInput({
			...input,
			countries: input.countries.filter((c) => c !== e)
		})
	};

	const submitHandle = (e) => {
		e.preventDefault();
		dispatch(createActivity(input))

		alert('Activity enviada')

		setInput({
			name: '',
			difficulty: '',
			duration: '',
			season: '',
			codeCountry: []
		})
	};

	const [ pagActual, setPagActual ] = useState(0);

	let pagSiguiente = () => {
		if(countries.length <= pagActual + 10) setPagActual(pagActual);

		setPagActual(pagActual + 10);
	};

	let pagAnterior = () => {
		if(pagActual < 9) setPagActual(0);

		setPagActual(pagActual - 10);
	};

	useEffect(() => {
		setPagActual(0);
	}, [countries]);
	
	return (

		<div>
		<div>
		<form 
		onSubmit={submitHandle}
		>

		<div>
		<label>New activity: </label>
		<input 
		type="text"
		placeholder="Name Activity..."
		name="name"
		value={input.name}
		onChange={handleChange}
		 />
		 </div>

		 <div>
		 <label htmlFor="diff">Difficulty: </label>
		 <select 
		 name="difficulty" 
		 value={input.difficulty}
		 id="diff"
		 onChange={difficultyHandle}
		 >
		 <option value={1}>1</option>
		 <option value={2}>2</option>
		 <option value={3}>3</option>
		 <option value={4}>4</option>
		 <option value={5}>5</option>
		 </select>
		 </div>

		 <div>
		 <label htmlFor="dura">Duration: </label>
		 <select 
		 name="duration" 
		 id="dura"
		 value={input.duration}
		 onChange={durationHandle}
		 >
		 <option value={1}>1</option>
		 <option value={2}>2</option>
		 <option value={3}>3</option>
		 <option value={4}>4</option>
		 <option value={5}>5</option>
		 <option value={6}>6</option>
		 <option value={7}>7</option>
		 <option value={8}>8</option>
		 <option value={9}>9</option>
		 <option value={10}>10</option>
		 <option value={11}>11</option>
		 <option value={12}>12</option>
		 <option value={13}>13</option>
		 <option value={14}>14</option>
		 <option value={15}>15</option>
		 <option value={16}>16</option>
		 <option value={17}>17</option>
		 <option value={18}>18</option>
		 <option value={19}>19</option>
		 <option value={20}>20</option>
		 <option value={21}>21</option>
		 <option value={22}>22</option>
		 <option value={23}>23</option>
		 <option value={24}>24</option>
		 </select>
		 </div>

		 <div>
		 <label htmlFor="season">Season: </label>
		 <select 
		 name="seson" 
		 id="season"
		 value={input.season}
		 onChange={seasonHandle}
		 >
		 <option value="Summer">Summer</option>
		 <option value="Spring">Spring</option>
		 <option value="Fall">Fall</option>
		 <option value="Winter">Winter</option>
		 </select>
		 </div>

		 <div>
		 <label>Countries: </label>
		 <select onChange={selectHandle} required >
		 <option value="" hidden > Choose an country</option>
		 {countriesOrdenadas.map((c) => (
		 	<option value={c.id} name="codeCountry" key={c.id}>{c.name}</option>
		 	))}
		 </select>

		 </div>

		 <div>
		 <ul>
		 <li>{
		 	input.codeCountry.map((e) => (
		 		<div key={e}>
		 		{e}
		 		<button type="button" onClick={() => deleteHandle(e)}>X</button>
		 		</div>
		 		))
		 }
		 </li>
		 </ul>
		 </div>
		 <button type='submit'>Add new activity</button>
		</form>
		</div>

		<button onClick={pagAnterior} > {'<--'} </button>
		<button onClick={pagSiguiente}> {'-->'} </button>

		</div>
		);

};

export default NewActivity;

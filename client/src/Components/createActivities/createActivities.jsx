import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createActivity, getCountries, getActivity, loading } from '../../Redux/actions.js';
import { Link } from 'react-router-dom';
import s from './createActivities.module.css';

const NewActivity = () => {

	const countries = useSelector((state) => state.allCountries);
	const activities = useSelector((state) => state.allActivities);
	const loadingi = useSelector((state) => state.loading);
	const countriesOrdenadas = countries.sort((a, b) => a.name.localeCompare(b.name));

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
		dispatch(loading())
		dispatch(getActivity())
	}, [dispatch]);

	/*const handleChange = (e) => {
		setInput({
			...input,
			name: e.target.value
		})
	};*/

	const selectHandle = (e) => {
		let code = input.codeCountry.find((el) => el === e.target.value);
		if(!code){
			setInput({
				...input,
				codeCountry: [...input.codeCountry, e.target.value]
			})
		}
	};

	const seasonHandle = (e) => {
		setInput({
			...input,
			[e.target.season]: e.target.value
		})
		setInput({
			...input,
			[e.target.name]: e.target.value
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
			codeCountry: input.codeCountry.filter((c) => c !== e)
		})
	};

	const submitHandle = (e) => {
		e.preventDefault();
		if(!input.name){
			alert("debe ingresar una actividad")
		} else {
			if(input.name === input.name.toLowerCase()){
				alert("El primer caracter del nombre de la actividad debe ser en mayusculas")
			}else{
				dispatch(createActivity(input))
				alert('Activity enviada')
			}
		dispatch(getActivity())
		setInput({
					name: '',
					difficulty: '',
					duration: '',
					season: '',
					codeCountry: []
				})
		}
	};

	const [ pagActual, setPagActual ] = useState(0);

	let pagSiguiente = () => {
		if(activities.length <= pagActual + 10) setPagActual(pagActual);

		setPagActual(pagActual + 10);
	};

	let pagAnterior = () => {
		if(pagActual < 9) setPagActual(0);

		setPagActual(pagActual - 10);
	};

	useEffect(() => {
		setPagActual(0);
	}, [activities]);
	
	return (

		<div>
		<div >
		<form 
		className={s.create}
		onSubmit={submitHandle}
		>

		<div>
		<label>New activity: </label>
		<input 
		type="text"
		placeholder="Name Activity..."
		name="name"
		value={input.name}
		onChange={seasonHandle}
		required
		 />
		 </div>

		 <div>
		 <label htmlFor="diff">Difficulty: </label>
		 <select 
		 name="difficulty" 
		 value={input.difficulty}
		 id="diff"
		 onChange={difficultyHandle}
		 required
		 >
		 <option value="" default ></option>
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
		 required
		 >
		 <option value="" default ></option>
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
		 </select>horas
		 </div>

		 <div>
		 <label htmlFor="season">Season: </label>
		 <select 
		 name="season" 
		 id="season"
		 value={input.season}
		 onChange={seasonHandle}
		 required
		 >
		 <option value="" ></option>
		 <option value="Summer">Summer</option>
		 <option value="Spring">Spring</option>
		 <option value="Fall">Fall</option>
		 <option value="Winter">Winter</option>
		 </select>
		 </div>

		 <div>
		 <label htmlFor="codeCountry">Countries: </label>
		 <select
		 id="codeCountry"
		 onChange={selectHandle} required >
		 <option hidden ></option>
		 {countriesOrdenadas.map((c) => (
		 	<option value={c.id} name="codeCountry" key={c.name} unique="true" >{c.name}</option>
		 	))}
		 </select>

		 </div>

		 
		 <button type='submit'>Add new activity</button>
		</form>

		<div className={s.code} >{
		 	input.codeCountry.map((e) => (
		 		<div className={s.cod} id={e} key={e}>
		 		{e}
		 		<button type="button" onClick={() => deleteHandle(e)}>X</button>
		 		</div>
		 		))
		 }
		 </div>
		 </div>
		 <div >
		<div>{
			loadingi? <img src="https://i.pinimg.com/originals/77/58/a8/7758a8ddaea8e34e58d407d8489940a0.gif" alt="" /> : 
			activities.map((c) => (
				<div className={s.card} key={c.id} >
					<h4>{c.name}</h4>
					<h5>{c.season}</h5>
				</div>
					))
		}</div>

		<button onClick={pagAnterior} > {'<--'} </button>
		<button><Link to='/countries' >Back all Countries</Link> </button>
		<button onClick={pagSiguiente}> {'-->'} </button>
		</div>
		</div>
		);
};

export default NewActivity;

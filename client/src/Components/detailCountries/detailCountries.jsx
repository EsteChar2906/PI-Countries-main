import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getDetailCountry, loading } from '../../Redux/actions.js';
import s from './detailCountries.module.css'

const DetailCountries = () => {

	const detail = useSelector((state) => state.countryDetails);
	const loadingif = useSelector((state) => state.loading)

	const dispatch = useDispatch();

	let activity = detail.Tourist_Activities

	let { id } = useParams();

	useEffect(() => {
		dispatch(loading())
		dispatch(getDetailCountry(id));
	}, [ id, dispatch]);


	return (
		<div>
		{loadingif? <img className={s.gif} src="https://i.pinimg.com/originals/77/58/a8/7758a8ddaea8e34e58d407d8489940a0.gif" alt="cargando..." /> :
			<div>
			<div className={s.fondo}>
			<div className={s.title} >
			<div>
			<h1>{detail.name}</h1>
			</div>
			<div className={s.bandera} >
		      <img src={detail.flag_image} alt="bandera" />
		     </div>
			</div>

		<div className={s.detail} >

		<div>

		<h3 className={s.center} >Country details: </h3>
		
		<p><b>Continent:</b> {detail.continent}</p>
		<p><b>Capital:</b> {detail.capital}</p>
		<p><b>Subregion:</b> {detail.subregion}</p>
		<p><b>Area:</b> {detail.area} Km<sup>2</sup></p>
		<p><b>Population:</b> {detail.population} Hab</p>


		</div>

		<div>
		<h3 className={s.center} >Activities:</h3>
		<div className={s.activities} >
		{activity?.map((a) => (
				<div className={s.cardActivity} key={a.id}>
				<p><b>Name:</b> {a.name}</p>
				<p><b>Difficulty:</b> {a.difficulty}</p>
				<p><b>Duration:</b> {a.duration} horas</p>
				<p><b>Season:</b> {a.season}</p>
				</div> 
				))
	}
	</div>
	</div>
		</div>
		</div>
		<div className={s.links} >
		<div >
		<h6 className={s.buttons}><Link className={s.enlace} to="/countries">All Countries</Link></h6>
		</div>

		<div>
		<h6 className={s.buttons}><Link className={s.enlace} to="/activities">Create new tourist activity</Link></h6>
		</div>
		</div>
		</div>
		}</div>

		);
};


export default DetailCountries;
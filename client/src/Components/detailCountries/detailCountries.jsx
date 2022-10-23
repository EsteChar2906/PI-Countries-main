import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailCountry } from '../../Redux/actions.js';

const DetailCountries = () => {

	const detail = useSelector((state) => state.countryDetails);
	const loading = useSelector((state) => state.loading)

	const dispatch = useDispatch();

	let { id } = useParams();

	useEffect(() => {
		dispatch(getDetailCountry(id));
	}, [ id, dispatch]);


	return (
		<div>
		<div>
		{loading? <h1> cargando aca va imagen </h1> : detail?
			<div>

			<div>
			<h1>{detail.name}</h1>
			<div>
		      <img src={detail.flag_image} alt="bandera" />
		     </div>
			</div>

		<div>
		<div>
		<div>

		<h3>Country details: </h3>
		
		<p>Continent: {detail.continent}</p>
		<p>Capital: {detail.capital}</p>
		<p>Subregion: {detail.subregion}</p>
		<p>Area: {detail.area} km2</p>
		<p>Population: {detail.population} Hab</p>


		</div>

		<div>
		<h3>Activities:</h3>
		<div>
		{detail.Tourist_Activities?.map((a) => (
				<div key={a.id}>
				<p>Name: {a.name}</p>
				<p>Difficulty: {a.difficulty}</p>
				<p>Duration: {a.duration}</p>
				<p>Season: {a.season}</p>
				</div>
				)
		)}</div>
		</div>
		</div>
		</div>
		</div>: <p> Country not found </p>


		}
		</div>



		</div>

		);
};


export default DetailCountries;
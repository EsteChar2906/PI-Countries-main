import React from 'react';
import s from './country.module.css'

const Country = ({name, id, flag_image, continent }) =>{
	return(
		<div className={s.plantilla}>
		    <div className={s.nombres} >
		        <h3>Country: {name} - {id}</h3>
		        <p>Continent: {continent}</p>
		    </div>
		    <div className={s.image}>
		        <img src={flag_image} alt="Bandera" />
		    </div>
		</div>
		);
};

export default Country;
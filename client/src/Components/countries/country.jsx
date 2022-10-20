import React from 'react';
import s from './country.module.css'

const Country = ({name, id, flag_image, continent}) =>{
	return(
		<div className={s.plantilla}>
		    <div className={s.nombres} >
		        <h1>Country: {name} - {id}</h1>
		        <h2>Continent: {continent}</h2>
		    </div>
		    <div className={s.image}>
		        <img src={flag_image} alt="Bandera" />
		    </div>
		</div>
		);
};

export default Country;
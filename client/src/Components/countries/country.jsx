import React from 'react';
import { Link } from 'react-router-dom'
import s from './country.module.css'

const Country = ({name, id, flag_image, continent }) =>{
	return(
		<div className={s.template}>
		    <div className={s.textTemplate} >
		        <h3 className={s.text} >Country: <Link className={s.text} to={{ pathname: `/countries/${id}`
		        }}> {name} - {id}</Link></h3>
		        <p className={s.text}><b>Continent: {continent}</b></p>
		    </div>
		    <div >

		        <img className={s.image} src={flag_image} alt="Bandera" width="80" height="40"/>
		    
		    </div>
		</div>
		);
};

export default Country;
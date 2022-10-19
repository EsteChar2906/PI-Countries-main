import React from 'react';
import s from './landingPage.module.css';
import {Link} from 'react-router-dom'

const landingPage = () => {
	return (
		<div>
    		<div className={s.home}>
        		<h1 className={s.title}>Cansado de tú planeta</h1>
        		<div>
            		<p><b> Viaja a la tierra y descubre los destinos<br/>turisticos de sus paises. Anímate, tal véz, quieras<br/> conquistarla. Haz click aqui 
            		<Link className={s.button} to="/countries"> Home </Link> </b>
            		</p>		
        		</div>
    		</div>
		</div>
		)
}

export default landingPage;
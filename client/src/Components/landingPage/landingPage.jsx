import React from 'react';
import s from './landingPage.module.css';
import { Link } from 'react-router-dom'
import Henry from '../../Imagen de fondo/logoHenry.png'

const LandingPage = () => {
	return (
		<div className={s.home}>
    		<div className={s.text} >
        		<h1 >Cansado de tú planeta</h1>
              		<p><b> Explora esta aplicacion donde podras ver los diferentes paises que existen en en el Planeta Tierra. Viaja y descubre sus destinos turisticos. Anímate, tal véz, quieras conquistarla. Haz click aqui 
            		<Link to="/countries"><button type="autofocus" className={s.buttonHome}> 	EXPLORE </button></Link> </b>
            		</p>
    		</div>

    		<div className={s.henry}>
    		<p><b>PI - Country para el Bootcamp de</b></p>
    		<a rel="noreferrer" href="https://www.soyhenry.com" target="_blank" ><img className={s.logo} src={Henry} alt="Logo Henry" /></a> 
    		</div> 
		</div>
		)
}

export default LandingPage;
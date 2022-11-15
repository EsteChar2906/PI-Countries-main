import axios from 'axios';
import {
	GET_COUNTRIES,
	GET_DETAIL_COUNTRY,
	GET_COUNTRY_NAME,
	GET_ACTIVITY,
	FIL_BY_CONTINENT,
	FIL_BY_ACTIVITY, 
	ORD_ALPHA,
	ORD_BY_POP,
	CREATE_ACTIVITY,
	ERROR,
	LOADING
} from './actionsTypes.js'

export const loading = () => {
	return {
		type: LOADING,
	}
}

export const getCountries = () => {
	return async function(dispatch){
		try{
			const response = await axios.get("https://pi-countries-main-production-3a25.up.railway.app/countries/")
			dispatch({
				type: GET_COUNTRIES,
				payload: response.data
			})
		} catch(error){
			return dispatch({
				type: ERROR,
				payload: error.response.data.message
			})
		}
	};
};

export const getDetailCountry = (id) => {
	return async function(dispatch){
		try{

			const response = await axios.get(`https://pi-countries-main-production-3a25.up.railway.app/countries/${id}`);
		    dispatch({
		    	type: GET_DETAIL_COUNTRY,
		    	payload: response.data
		    })
		} catch(error){
			console.log(error)
		}		
	};
};

export const getCountryName = (name) => {
	return async function(dispatch){
		try{
		    const response = await axios.get(`https://pi-countries-main-production-3a25.up.railway.app/countries?name=${name}`);
		    dispatch({
		    	type: GET_COUNTRY_NAME,
		    	payload: response.data
		    })
		}catch(error){
			return dispatch({
				type: ERROR,
				payload: error.response.data.message
			})
		}
	};
};

export const getActivity = () => {
	return async function(dispatch){
		try{
			const response = await axios.get(`https://pi-countries-main-production-3a25.up.railway.app/activities`);
			dispatch({
				type: GET_ACTIVITY,
				payload: response.data
			})

		} catch(error){
			return dispatch({
				type: ERROR,
				payload: error.response.data.message
			})
		}
	};
};

export const filByContinent = (payload) => {
	return {
		type: FIL_BY_CONTINENT,
		payload
	};
};

export const filByActivity = (payload) => {
	return {
		type: FIL_BY_ACTIVITY,
		payload
	};
};

export const ordAlpha = (payload) => {
	return {
		type: ORD_ALPHA,
		payload
	};
};

export const ordByPopul = (payload) => {
	return {
		type: ORD_BY_POP,
		payload
	};
};

export const createActivity = (activity) => {
	return async function(dispatch){
		try{
		    const create = await axios.post('https://pi-countries-main-production-3a25.up.railway.app/activities', activity);
		    dispatch({
		    type: CREATE_ACTIVITY,
		    payload: create.data
		    })
		} catch(error){
			console.log(error)
		}
	}
};
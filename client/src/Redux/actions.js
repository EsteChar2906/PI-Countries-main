import axios from 'axios';

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETAIL_COUNTRY = "GET_DETAIL_COUNTRY";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";
export const FIL_BY_CONTINENT = "FIL_BY_CONTINENT";
export const FIL_BY_ACTIVITIES = "FIL_BY_ACTIVITIES";
export const ORD_ALPHA_AZ = "ORD_ALPHA_AZ";
export const ORD_ALPHA_ZA = "ORD_ALPHA_ZA";
export const ORD_POP_CRE = "ORD_POP_CRE";
export const ORD_POP_DCR = "ORD_POP_DCR";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";

export const getCountries = () => {
	return async function(dispatch){
		const response = await axios.get("http://localhost:3001/countries/")
		dispatch({
			type: GET_COUNTRIES,
			payload: response.data
		})
	};
};

export const getDetailCountry = (id) => {
	return async function(dispatch){
		const response = await axios.get(`http://localhost:3001/countries/${id}`);
		dispatch({
			type: GET_DETAIL_COUNTRY,
			payload: response.data
		})		
	};
};

export const getCountryName = (name) => {
	return async function(dispatch){
		const response = await axios.get(`http://localhost:3001/countries?name=${name}`);
		dispatch({
			type: GET_COUNTRY_NAME,
			payload: response.data
		})
	};
};

export const filByContinent = (continent) => {
	return {
		type: FIL_BY_CONTINENT,
		payload: continent
	};
};

export const filByActivities = (activity) => {
	return {
		type: FIL_BY_ACTIVITIES,
		payload: activity
	};
};

export const ordAlphaAZ = () => {
	return {
		type: ORD_ALPHA_AZ
	};
};

export const ordAlphaZA = () => {
	return {
		type: ORD_ALPHA_ZA
	};
};

export const ordPopCre = () => {
	return {
		type: ORD_POP_CRE
	};
};

export const ordPopDec = () => {
	return {
		type: ORD_POP_DCR
	};
};

export const createActivity = (activity) => {
	return async function(dispatch){
		const create = await axios.post('http://localhost:3001/activities', activity);
		dispatch({
			type: CREATE_ACTIVITY,
			payload: create.data
		})
	}
};
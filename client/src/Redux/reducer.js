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
	LOADING,
	ERROR,
} from './actionsTypes.js';

const initialState = {
	allCountries: [],
	countryDetails: {},
	countryByname: {},
	FilContinents: [],
	FilActivities: [],
	order: [],
	createActivity: [],
	allActivities:[],
	loading: false,
	error: ''
};

const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_COUNTRIES:
		return {
			...state,
			error:'',
			allCountries: action.payload,
			FilContinents: action.payload,
			FilActivities: action.payload,
			order: action.payload,
		};

		case GET_DETAIL_COUNTRY:
		return {
			...state,
			countryDetails: action.payload,
			loading: false
		};

		case GET_COUNTRY_NAME:
		return {
			...state,
			allCountries: action.payload,
			error: ''
		};

		case GET_ACTIVITY:
		return{
			...state,
			loading:false,
			allActivities: action.payload
		}

		case FIL_BY_CONTINENT:
		const filterC = action.payload;
		const continents = state.FilContinents;
		let filByContinent;
		if(filterC === "all continents"){
			filByContinent = continents;
		} else {
			filByContinent = continents.filter((c) => c.continent === filterC)
		}
		return {
			...state,
			allCountries: filByContinent
		};

		case FIL_BY_ACTIVITY:
		const filterA = action.payload;
		const activities = state.FilActivities;
		let filByActivities;
		if(filterA === 'all activities'){
			filByActivities = activities;
		} else{
			filByActivities = activities.filter((c) => c.Tourist_Activities.find((a) => a.name === filterA))
		}
		return {
			...state,
			allCountries: filByActivities
		};

		case ORD_ALPHA:
		const orderA = action.payload;
		let ordAlpha = state.order;
		if(orderA === "A-Z"){
			ordAlpha = state.allCountries.slice().sort((a, b) => a.name.localeCompare(b.name))
		} 
		if(orderA === "Z-A"){
			ordAlpha = state.allCountries.slice().sort((a, b) => b.name.localeCompare(a.name))
		} 
		return {
			...state,
			allCountries: ordAlpha 
		};
		
		case ORD_BY_POP:
		const orderP = action.payload;
		let ordByPop = state.order;
		console.log(state.allCountries)
		if(orderP === "menor"){
			ordByPop = state.allCountries.slice().sort((a, b) => a.population - b.population)
		}
		if(orderP === "mayor"){
			ordByPop = state.allCountries.slice().sort((a, b) => b.population - a.population)
		} 
		return {
			...state,
			allCountries: ordByPop
		};

		case CREATE_ACTIVITY:
		return {
			...state,
			createActivity: state.createActivity.push(action.payload)
		};


		case LOADING:
		return {
			...state,
			loading: true
		};

		case ERROR:
		return {
			...state,
			error: action.payload
		}

		default:
		return state;
	}
};

export default rootReducer;
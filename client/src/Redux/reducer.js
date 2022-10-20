import {
	GET_COUNTRIES,
	GET_DETAIL_COUNTRY,
	GET_COUNTRY_NAME,
	FIL_BY_CONTINENT,
	FIL_BY_ACTIVITIES, 
	ORD_ALPHA_AZ, 
	ORD_ALPHA_ZA, 
	ORD_POP_CRE,
	ORD_POP_DCR,
	CREATE_ACTIVITY
} from './actions.js'

const initialState = {
	countries: [],
	countriesDetail: [],
	countriesName: [],
	activities: []
};

const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_COUNTRIES:
		return {
			...state,
			countries: action.payload
		};
		case GET_DETAIL_COUNTRY:
		return {
			...state,
			countriesDetail: action.payload
		};
		case GET_COUNTRY_NAME:
		return {
			...state,
			countriesName: action.payload
		};
		case FIL_BY_CONTINENT:
		return {
			...state,
			countries: state.countries.filter((c) => c.continent === action.payload)
		};
		case FIL_BY_ACTIVITIES:
		return {
			...state,
			countries: state.countries.filter((c) => c.activities.some((a) => a.name === action.payload))
		};
		case ORD_ALPHA_AZ:
		return {
			...state,
			countries: state.countries.slice().sort((c1, c2) => c1.name.localeCompare(c2.name))
		};
		case ORD_ALPHA_ZA:
		return {
			...state,
			countries: state.countries.slice().sort((c1, c2) => c2.name.localeCompare(c1.name))
		};
		case ORD_POP_CRE:
		return {
			...state,
			countries: state.countries.slice().sort((c1, c2) => c1.population - c2.population)
		};
		case ORD_POP_DCR:
		return {
			...state,
			countries: state.countries.slice().sort((c1, c2) => c2.population - c1.population)
		};
		case CREATE_ACTIVITY:
		return {
			...state,
			activities: action.payload
		}

		default:
		return state;
	}
};

export default rootReducer;
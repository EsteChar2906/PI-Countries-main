import {
	GET_COUNTRIES,
	GET_DETAIL_COUNTRY,
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
	countriesDetail: []
};

const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_COUNTRIES:
		return {
			...state,
			countries: action.payload
		};
		default:
		return state;
	}
};

export default rootReducer;

//this is the reducer that handles FETCH_WEATHER action. 
// Since, we are showing weather of different cities as a list, we need to save their states as an array.

import { FETCH_WEATHER } from '../actions/index';
 
export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
			// since we are searching for different cities, we need to have all the data. 
			// Do not mutate state in Redux. We need to return a new instance of state eveyrtime. state.push manipulates the existing array.
			//return [action.payload.data, ...state]; // we are just pushing the new data record on to the top of existing state array 
			return state.concat([action.payload.data]); 

	}
	return state;
}
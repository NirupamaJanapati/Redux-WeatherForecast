
//This file is the action creator for search button. 
//Handles the AJAX request. It is done using Axios library, which is just like a jQuery library.

import axios from 'axios';

const API_KEY = '19e87ddc45609a29059273faf9be9a39';

//using the ES6 template strings, so that we can inject the javascript variable in the input string.
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


//creating a single source for action 'type' as it has consistent between action creator and reducers.
export const FETCH_WEATHER = 'FETCH_WEATHER';

//fetchWeather is an action creator that returns a action object. It takes city as parameter.
export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);  //returns a promise, according to axiom.

	console.log('Request:' , request);

	return {
		type: FETCH_WEATHER, 
		payload: request //returning the promise as payload, which is additional data of the action.
	};
}
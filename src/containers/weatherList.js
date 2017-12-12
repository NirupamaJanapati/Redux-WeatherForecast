

//this is the container where the weatherlist for cities will show up.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';


class WeatherList extends Component {
	
	//this is render helper method, which contains data of cities one after one.
	renderWeather(cityData) {

		const name = cityData.city.name;
		const temps = cityData.list.map(temperatureVal => temperatureVal.main.temp);
		const pressures = cityData.list.map(pressureVal => pressureVal.main.pressure);
		const humidities = cityData.list.map(humidityVal => humidityVal.main.humidity);

		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;
		//const {lon , lat} = cityData.city.coord; //ES6 notation to pull both coord and assign to new values of lat & lon

		return (
			<tr key = { name }>
				<td> <GoogleMap lon = {lon} lat = {lat} /> </td>
				<td><Chart data = {temps} color = "red" units = "K" /></td>
				<td><Chart data = {pressures} color = "black" units = "hPa" /></td>
				<td><Chart data = {humidities} color = "darkgreen" units = "%" /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className = "table table-hover">
				<thead>
					<tr>
						<th> City </th>
						<th> Temperature (K) </th>
						<th> Pressure (hPa) </th>
						<th> Humidity (%) </th>
					</tr>		
				</thead>
				<tbody>
					{ this.props.weather.map(this.renderWeather) }
				</tbody>
			</table>
		);
	}
}


function mapStateToProps(state) {
	return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList); //return the connected weatherstate and WeatherList.
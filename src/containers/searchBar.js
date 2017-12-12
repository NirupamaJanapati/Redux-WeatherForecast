
//This component is for search bar in the page, which has a input field and button.
//It should be a container as it has input value which keeps on changing, which in turn changes the application state.

// Also, submit button should be a controlled field, because its value has to be set by state of the component (although it is the 
//value entered in the input search bar).

import React, { Component } from 'react';

// for binding redux to react
import { connect } from 'react-redux';  
import { bindActionCreators } from 'redux';

//bind the action creator to the container
import { fetchWeather } from '../actions/index'; 

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' }; //term here means the search term / input entered.

		//whenever we pass a callback with this, we need to pass the object to which it has to be binded.
		//Therefore, searchBar has to be binded with onInputChange function.
		this.onInputChange = this.onInputChange.bind(this); 
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}


	//Event handlers - every DOM event handler comes with event object.
	
	// event handler for input change in search bar. 
	onInputChange(event) {
		//set the state value to the input changes.
		this.setState({ term:event.target.value });
	}

	//event handler for onSubmit
	onFormSubmit(event) {
		//this will prevent the default submit form.
		event.preventDefault();

		//we need to fire the action creator and fetch the weather data.
		this.props.fetchWeather(this.state.term);
		this.setState({ term : '' })
	}

	render() {
		return (
			<div>
			<form onSubmit = {this.onFormSubmit} className = "input-group">
				<input
					placeholder = "Get a five-day weather forecast in your favourite cities"
					className = "form-control"
					value = { this.state.term }
					onChange = { this.onInputChange } />
				<span className = "input-group-btn">
					<button type = "submit" className = "btn btn-secondary">Submit</button>
				</span>
			</form>	
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	//when an action is returned from fetchWeather action creator, bindactioncreators along with
	// dispatch makes sure that it flows into the middleware and the reducers.
	return bindActionCreators({ fetchWeather} , dispatch);
}

//this container doesn't care about state. Therefore, first parameter is passed as null.
export default connect(null, mapDispatchToProps)(SearchBar);
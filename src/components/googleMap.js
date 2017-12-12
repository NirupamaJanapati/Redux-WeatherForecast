 import React, { Component } from 'react';


class GoogleMap extends Component {
	
	//This method gets called immediately after our component is rendered on the screen.
	componentDidMount() {
		//pass the element where the map should be shown and other required paramters.
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}


	render() {
		return <div ref = "map" />;
	}
}


 export default GoogleMap;
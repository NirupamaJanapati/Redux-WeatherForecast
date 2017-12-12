import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weatherList';
import AppLogo from './logo';

export default class App extends Component {
  render() {
    return (
      <div>
      	<AppLogo />
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}

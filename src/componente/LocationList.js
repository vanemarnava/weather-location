import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';



const LocationList = ( {cities, onSelectedLocation } ) => {
	const handleWeatherLocationClick = (city) => {
		console.log('handleWeatherLocationClick');
		onSelectedLocation(city);
	}

	const strToComponent = ( cities ) => (
		cities.map(city => (
			// key, el mismo nombre de la ciudad
			<WeatherLocation 
				key = {city} 
				city = {city} 
				// evento que se esta disparando en index.js (onWeatherLocation), se disparara otro evento (handleWeatherLocationClick), cuando este handleWeather... se ejecute, se disparara otro evento (onSelectedLocation).
				onWeatherLocationClick = { 
					() => 
					handleWeatherLocationClick(city)
				}
			/>
		))
	)
	return (
		<div>
			{strToComponent(cities)}
		</div>
	)
}

LocationList.propTypes = {
	cities: PropTypes.array.isRequiered,
	onSelectedLocation: PropTypes.func,
}

export default LocationList;
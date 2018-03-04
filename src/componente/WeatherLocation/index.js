import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index.js';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constant/weathers.js';
//import'.style.css';

const api_key = '3964db249e6c82ee05522ad1fa60775e';
const location = 'Buenos Aires,ar';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;

const data1 = {
  temperature: 32,
  weatherState: SUN,
  humidity: 2,
  wind: '10 m/s',
}
/*
const data2 = {
  temperature: 10,
  weatherState: SNOW,
  humidity: 98,
  wind: '70 m/s',
}
*/

/*
const WeatherLocation = () => (
    <div className='weatherLocation'>
      <Location city = {'Santiago'}/>
      <WeatherData data = {data}/>
    </div>
  )
*/

class WeatherLocation extends Component {

  constructor () {
    super();
    this.state = {
      city: 'Santiago',
      data: data1
    }
  }

  getWeatherState = (weather) => {
    return SUN;
  }

  getData = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherState(this.weather);

    const data = {
      humidity,
      temperature: temp,
      weatherState,
      wind: `${speed} m/s`,
    }
    return data;
  }

  handleUpdateClick = () => {
    /*
    this.setState ({
      data: data2
    })
    */
    fetch(api_weather).then(data => {
      console.log(data);
      return data.json();
    }).then(weather_data => {
      const data = this.getData(weather_data);
      this.setState({ data });
    })
    


    console.log('Actualizado');
  }
  render = () => (
    <div className='weatherLocation'>
      <Location city = {this.state.city}/>
      <WeatherData data = {this.state.data}/>
      <button onClick={this.handleUpdateClick}>Actualizar</button>
    </div>
  )
}





export default WeatherLocation;
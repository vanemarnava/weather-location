import React, { Component } from 'react';
import PropTypes from 'prop-types';
// importar el circulo de loading
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData/index.js';
import transformWeather from './../../services/tranformWeather.js';
// import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constant/weathers.js';
//import'.style.css';

const api_key = '3964db249e6c82ee05522ad1fa60775e';
//const city = 'Santiago,scl';
const url = 'http://api.openweathermap.org/data/2.5/weather';
//const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;

/*
const data1 = {
  temperature: 32,
  weatherState: SUN,
  humidity: 2,
  wind: '10 m/s',
}

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

  //paso 1 constructor 
  constructor ({city}) {
    super();
    this.state = {
      city, //city : city
      data: null
    }
    console.log('constructor');
  }

  //handleUpdateClick = () => {
    /*
    this.setState ({
      data: data2
    })
    */
    // const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
    // fetch(api_weather).then(data => {
    //   console.log(data);
    //   return data.json();
    // }).then(weather_data => {
    //   const data = transformWeather(weather_data);
    //   this.setState({ data });
    // }) 
  //   console.log('Actualizado');
  // }

  componentWillMount(){
    //console.log('componentWillMount');    
    //invocar al evento del click
    // la actualizacion de los datos se hara automaticamente, sin la necesidad del boton actualizar
    const {city} = this.state;
    const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;

    fetch(api_weather).then(data => {
      console.log(data);
      return data.json();
    }).then(weather_data => {
      const data = transformWeather(weather_data);
      this.setState({ data });
    }) 

    ///handleUpdateClick();
  }

  /*
  // se mostrara depues de render()
  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillUpDate(){
    console.log('componentWillUpDate');
  }

  componentDidUpDate(){
    console.log('componentDidUpDate');
  }
  */

  render = () => {
    console.log('Render');
    const {onWeatherLocationClick} = this.props;
    const { city, data } = this.state;
    return (
      <div className='weatherLocation' onClick={onWeatherLocationClick}>
        <Location city = {city}/> 
        { 
          // objeto data tiene informacion hacer, de lo contrario manda mensaje de cargando
          data !== null ? <WeatherData data = {data}/> : <CircularProgress size={60} thickness={7} />
        }
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  // validar que es una funcion
  onWeatherLocationClick: PropTypes.func,
} 

export default WeatherLocation;
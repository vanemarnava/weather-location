import React from 'react';
import PropTypes from 'prop-types';

/*
const WeatherExtraInfo = () => (
  <div>
    Extra Info
  </div>
)
*/

const WeatherExtraInfo = ({humidity, wind}) => (
  <div classname='weatherExtraInfoCont'>
    <span classname='weatherExtrainfo'>{`Humedad: ${humidity} % -`}</span>
    <span classname='weatherExtrainfo'>{`Vientos: ${wind} wind`}</span>
  </div>
)

/* Validando datos*/
WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;
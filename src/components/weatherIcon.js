import React from 'react';
import PropTypes from 'prop-types';


const WeatherIcon =({code, alt}) => {
  const baseUrl = "http://openweathermap.org/img/w/"
  const url = code ? baseUrl+code+".png" : "";
  return (
        <img src={url} alt={alt}/>
    );
};

// props validation
WeatherIcon.propTypes = {
  code: PropTypes.string,
  alt: PropTypes.string
};

export default WeatherIcon;
import React  from 'react';
import City from '../containers/city';
import Forecast from '../containers/forecast';

const WeatherApp = () => {
  return (
    <div className="container">
      <h1>Weather Forecast</h1>
      <City/>
      <Forecast/>
    </div>
  );
};

export default WeatherApp;

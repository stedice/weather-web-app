import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './weatherIcon';


const DaySummary = ({ item, dayName, day }) => {
  return (
    <li role="presentation" >
      <a href={"#"+day}>
        <h3>{dayName}</h3>
        <WeatherIcon code={item.weather.icon} alt={item.weather.description}/>
        <h3>{Math.floor(item.main.temp_max)} <small>°C</small></h3> 
        <h4 className="text-muted">{Math.floor(item.main.temp_min)} <small>°C</small></h4>
      </a>
    </li>
  );
};

// props validation
DaySummary.propTypes = {
  item: PropTypes.object,
  dayName: PropTypes.string,
  day: PropTypes.number
};

export default DaySummary;

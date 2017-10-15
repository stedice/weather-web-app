import React from 'react';
import PropTypes from 'prop-types';


const DaySummary = ({ item, dayName }) => {
  return (
    <li role="presentation" >
      <a href={"#collapse"+dayName}>
        <h3>{dayName}</h3>
        <img src={"http://openweathermap.org/img/w/"+item.weather.icon+".png"} alt={item.weather.main}/>
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
};

export default DaySummary;

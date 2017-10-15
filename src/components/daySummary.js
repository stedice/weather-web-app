import React from 'react';
import PropTypes from 'prop-types';
import DayDetails from './dayDetails';


const DaySummary = ({ item, dayName }) => {
  return (
    <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href={"#collapse"+dayName}>
              {dayName}
              <img src={"http://openweathermap.org/img/w/"+item.weather.icon+".png"} alt={item.weather.main}/>
              min: {Math.floor(item.main.temp_min)}
              max: {Math.floor(item.main.temp_max)}
            </a>
          </h4>
            </div>
            <DayDetails list={item} dayName={dayName}/>
        </div>
  );
};

// props validation
DaySummary.propTypes = {
  item: PropTypes.object,
  dayName: PropTypes.string,
};

export default DaySummary;

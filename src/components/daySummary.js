import React from 'react';
import PropTypes from 'prop-types';


const DaySummary =({item, dayName}) => {
  return (
      <div>
        <h2>{dayName} {item.weather.main} m:{item.main.temp_min} M:{item.main.temp_max} </h2>
      </div>
    );
};

// props validation
DaySummary.propTypes = {
  item: PropTypes.object,
  dayName: PropTypes.string,
};

export default DaySummary;
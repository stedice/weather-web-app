import React from 'react';
import PropTypes from 'prop-types';


const DaySummary =({item}) => {
  return (
      <div>
        <h2>{item.weather.main} m:{item.main.temp_min} M:{item.main.temp_max} </h2>
      </div>
    );
};

// props validation
DaySummary.propTypes = {
  item: PropTypes.object,
};

export default DaySummary;
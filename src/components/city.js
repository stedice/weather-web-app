import React from 'react';
import PropTypes from 'prop-types';


const City =({city}) => {
  return (
      <div>
        <h2>{city.name}, {city.country}</h2>
      </div>
    );
};

// props validation
City.propTypes = {
  city: PropTypes.object,
};

export default City;

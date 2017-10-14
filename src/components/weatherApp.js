import React  from 'react';
import PropTypes from 'prop-types';


const WeatherApp = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
};

WeatherApp.propTypes = {
  children: PropTypes.object,
};

export default WeatherApp;
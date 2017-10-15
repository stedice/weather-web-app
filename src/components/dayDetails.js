import React from 'react';
import PropTypes from 'prop-types';


const DayDetails = ({ list, dayName }) => {
  return (
    <div id={"#collapse"+dayName} className="panel-collapse collapse in">
        <div className="panel-body">
            <p>body {list.weather.main}</p>
        </div>
    </div>
  );
};

// props validation
DayDetails.propTypes = {
  list: PropTypes.object,
  dayName: PropTypes.string,
};

export default DayDetails;

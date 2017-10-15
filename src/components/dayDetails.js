import React from 'react';
import PropTypes from 'prop-types';


const DayDetails = ({ item, dayName }) => {
  return (
    <div id={"#collapse"+dayName} className="panel-collapse collapse in">
        <div className="panel-body">
            <p>body</p>
        </div>
    </div>
  );
};

// props validation
DayDetails.propTypes = {
  item: PropTypes.object,
  dayName: PropTypes.string,
};

export default DayDetails;

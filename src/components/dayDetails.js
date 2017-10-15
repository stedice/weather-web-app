import React from 'react';
import PropTypes from 'prop-types';
import DayRow from './dayRow';


const DayDetails = ({ list }) => {
  return (
    <table className="table table-striped">
      <thead> 
        <tr> 
          <th className="text-center">time</th> 
          <th className="text-center">weather</th> 
          <th className="text-center">temperature</th> 
          <th className="text-center">pressure</th> 
          <th className="text-center">humidity</th> 
          <th className="text-center">clouds</th> 
          <th className="text-center">wind speed</th> 
          <th className="text-center">wind direction</th> 
          <th className="text-center">rain</th> 
        </tr>
      </thead>
      <tbody>
        {list.map((item, i) => <DayRow key={i} item={item}/>)}
      </tbody>
    </table>
  );
};

// props validation
DayDetails.propTypes = {
  list: PropTypes.array,
};

export default DayDetails;

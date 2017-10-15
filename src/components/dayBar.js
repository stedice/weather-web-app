import React from 'react';
import PropTypes from 'prop-types';
import { daySummary, dayName, groupByDay } from '../utils/dayUtils';
import DaySummary from './daySummary';


const DayBar =({dayGroups}) => {
  return (
      <div className="panel-group" id="accordion">
        {dayGroups.map((group, i) => 
          <DaySummary key={i} item={daySummary(group)} dayName={dayName(i)}/>)
        }
      </div>
    );
};

// props validation
DayBar.propTypes = {
  dayGroups: PropTypes.array,
};

export default DayBar;
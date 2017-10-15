import React from 'react';
import PropTypes from 'prop-types';
import { daySummary, dayName } from '../utils/dayUtils';
import DaySummary from './daySummary';


const DayBar =({dayGroups}) => {
  return (
    <ul className="nav nav-tabs nav-justified">
        {dayGroups.map((group, i) => 
          <DaySummary key={i} item={daySummary(group)} dayName={dayName(i)}/>)
        }
    </ul>
    );
};

// props validation
DayBar.propTypes = {
  dayGroups: PropTypes.array,
};

export default DayBar;
import React from 'react';
import PropTypes from 'prop-types';
import { daySummary, dayName, groupByDay } from '../utils/dayUtils';
import DaySummary from './daySummary';


const DayBar =({list}) => {
  return (
      <div> So Mario
        {groupByDay(list).map((group, i) => <DaySummary key={i} item={daySummary(group)} dayName={dayName(i)}/>)}
      </div>
    );
};

// props validation
DayBar.propTypes = {
  list: PropTypes.array,
};

export default DayBar;
import React from 'react';
import PropTypes from 'prop-types';
import { checkDay, daySummary } from '../utils/dayUtils';
import { numberRange } from '../utils/utils';
import DaySummary from './daySummary';


const DayBar =({list}) => {
	// const daySummary = [];
 //  for(let i = 0; i++; i<5){ //use range
 //    const todayList = list.filter
 //    const summary = {};
 //    daySummary.push(`<DaySummary id="daySummary${i}" item={summary}/>`);
 //  }
  const summary = {};
  return (
      <div> So Mario
        {numberRange(0,5).map((d,i) => <DaySummary key={d} item={daySummary(list)}/>)}     
      </div>
    );
};

// props validation
DayBar.propTypes = {
  list: PropTypes.array,
};

export default DayBar;
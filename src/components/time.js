import React from 'react';
import PropTypes from 'prop-types';


const Time =({txt}) => {
  let h = txt.substring(11, 13);
  h = (h == '00') ? '24': h;
  return (
        <span>{h}<small>.00</small></span>
    );
};

// props validation
Time.propTypes = {
  txt: PropTypes.string,
};

export default Time;
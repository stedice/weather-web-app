import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WeatherIcon from '../components/weatherIcon';
import { changeDay } from '../actions/dayActions';

const DaySummary = ({ item, dayName, day, daySelected, changeSelectedDay }) =>{ 
           //set active dayreducer
  return (
    <li role="presentation" >
      <a href="#"  onClick={() => changeSelectedDay(day)}>
        <h3>{dayName}</h3>
        <WeatherIcon code={item.weather.icon} alt={item.weather.description}/>
        <h3>{Math.floor(item.main.temp_max)} <small>°C</small></h3> 
        <h4 className="text-muted">{Math.floor(item.main.temp_min)} <small>°C</small></h4>
      </a>
    </li>
  );
};

// props validation
DaySummary.propTypes = {
  item: PropTypes.object,
  dayName: PropTypes.string,
  day: PropTypes.number,
  daySelected: PropTypes.number,
  changeDayy: PropTypes.function,
};

const mapStateToProps = (state) => {
  return {
    daySelected: state.dayReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeSelectedDay: changeDay
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DaySummary);

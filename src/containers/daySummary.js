import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WeatherIcon from '../components/weatherIcon';
import { changeDay } from '../actions/dayActions';

class DaySummary extends Component { //item, dayName, day
  render() {            //set active dayreducer
    return (
      <li role="presentation" >
      <a href="#"  onClick={changeDay(day)}>
        <h3>{dayName}</h3>
        <WeatherIcon code={item.weather.icon} alt={item.weather.description}/>
        <h3>{Math.floor(item.main.temp_max)} <small>°C</small></h3> 
        <h4 className="text-muted">{Math.floor(item.main.temp_min)} <small>°C</small></h4>
      </a>
    </li>
    );
  }
}

// props validation
DaySummary.propTypes = {
  dayReducer: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    dayReducer: state.dayReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeDay: changeDay
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DaySummary);

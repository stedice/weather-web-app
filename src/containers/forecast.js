import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchForecast } from '../actions/forecastActions';


class Forecast extends Component {

  checkDay(item, day = 0) { // day = 0,1,2,3,4
    const oneDay = 86400;
    let midnight = (new Date().setUTCHours(0, 0, 0, 0).valueOf() / 1000) + (oneDay * day);
    return (item.dt > midnight) && (item.dt <= (midnight + oneDay));
  }

  renderForecastList() {
    return this.props.forecastData.forecast.map((item) => {
      console.log(this.checkDay(item, 1));
      return (
        <li key={item.dt}> {item.dt_txt} {item.main.temp} {item.weather[0].description} </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderForecastList()}               
      </ul>
    );
  }
}

// props validation
Forecast.propTypes = {
  forecastData: PropTypes.object,
  fetchForecast: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    forecastData: state.forecastReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchForecast: fetchForecast
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);

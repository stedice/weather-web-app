import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchForecast } from '../actions/forecastActions';


class Forecast extends Component {
  
  renderForecastList() {
    return this.props.forecast.forecast.map((item) => {
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
  forecast: PropTypes.object,
  fetchForecast: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    forecast: state.forecastReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchForecast: fetchForecast
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);

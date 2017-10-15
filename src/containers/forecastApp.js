import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import City from '../components/city';
import DayBar from '../components/dayBar';
import { fetchForecast } from '../actions/forecastActions';


class ForecastApp extends Component {

  renderForecastList() {
    return this.props.forecastData.forecast.map((item) => {
      return (
        <li key={item.dt}> {item.dt_txt} {item.main.temp} {item.weather[0].description} </li>
      );
    });
  }

  render() {
    return (
      <div>
        <City city={this.props.forecastData.city} />
        <DayBar list={this.props.forecastData.forecast}/>
        <ul>
          {this.renderForecastList()}               
        </ul>
      </div>
    );
  }
}

// props validation
ForecastApp.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ForecastApp);

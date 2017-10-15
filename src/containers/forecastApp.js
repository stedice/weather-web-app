import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import City from '../components/city';
import DayBar from '../components/dayBar';
import DayDetails from '../components/dayDetails';
import { fetchForecast } from '../actions/forecastActions';
import { groupByDay } from '../utils/dayUtils';


class ForecastApp extends Component {
  render() {
    return (
      <div>
        <City city={this.props.forecastData.city} />
        <DayBar dayGroups={groupByDay(this.props.forecastData.forecast)}/>
        <DayDetails list={this.props.forecastData.forecast} />
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

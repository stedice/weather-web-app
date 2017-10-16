import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CityForm from './cityForm';
import DayBar from '../components/dayBar';
import DayDetails from '../components/dayDetails';
import { fetchForecast } from '../actions/forecastActions';
import { groupByDay } from '../utils/dayUtils';


export class ForecastApp extends Component { // eslint-disable-line no-named-as-default

  render() {
    if (this.props.fcData.fetching){
      return (<h1>Loading...</h1>);
    }
    else if (this.props.fcData.error){
      return (<div><h4>Error: </h4><p>{this.props.fcData.error}</p></div>);
    }
    const grouped = groupByDay(this.props.fcData.forecast);
    const content = (
      <div>
        <DayBar dayGroups={grouped}/>
        <DayDetails list={grouped[this.props.dayReducer]} /> 
      </div>);
    return (
      <div>
        <CityForm city={this.props.fcData.city} onSubmit={field => this.props.fetchForecast(field.cityField)} />
        {this.props.fcData.fetched && content} 
      </div>
    );
  }
}

// props validation
ForecastApp.propTypes = {
  fcData: PropTypes.object,
  dayReducer: PropTypes.number,
  fetchForecast: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    fcData: state.forecastReducers,
    dayReducer: state.dayReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchForecast: fetchForecast
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ForecastApp);

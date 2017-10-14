import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchForecast } from '../actions/forecastActions';


class City extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.forecast.city.name}</h2>
        <button onClick={() => this.props.fetchForecast()}>Click</button> 
      </div>
    );
  }
}

// props validation
City.propTypes = {
  forecast: PropTypes.object,
  fetchForecast: PropTypes.func
};

const mapStateToProps = (state) => {
  //console.log("thisisthestate:",state);
  return {
    forecast: state.forecastReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchForecast: fetchForecast
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(City);

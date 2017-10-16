import React from 'react';
import { shallow } from 'enzyme';
import { ForecastApp } from './forecastApp';
import CityForm from './cityForm';

describe('<ForecastApp />', () => {
  it('should contain <CityForm />', () => {
    const actions = {
      fetchForecast: () => { },
    };
    const fcdata = { 
      fetching: false,
      fetched: true,
      city: {},
      forecast: []
    };

    const wrapper = shallow(<ForecastApp actions={actions} fcData={fcdata} dayReducer={0}/>);
    expect(wrapper.find(CityForm).length).toEqual(1);
  });
});
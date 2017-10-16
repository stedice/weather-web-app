import React  from 'react';
import { shallow } from 'enzyme';
import WeatherApp from './weatherApp';
import ForecastApp from '../containers/forecastApp';


describe('<WeatherApp />', () => {
  it('should have a div that has a class container', () => {
    const wrapper = shallow(<WeatherApp />);
    const actual = wrapper.find('div').hasClass('container');
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it('should contain a ForecastApp component', () => {
    const wrapper = shallow(<WeatherApp />);
    const actual = wrapper.contains(<ForecastApp />);
    const expected = true;
    expect(actual).toEqual(expected);
  });
});

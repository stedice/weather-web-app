import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import WeatherApp from './components/weatherApp';
import { fetchForecast } from './actions/forecastActions';

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import configureStore from './store/configureStore';

const store = configureStore();

render(
	<Provider store={store}>
		<WeatherApp />
	</Provider>,
	store.dispatch(fetchForecast())
);
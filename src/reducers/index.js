// Set up your root reducer here...
import { combineReducers } from 'redux';
import forecastReducers from './forecastReducers';
import dayReducers from './dayReducers';

export default combineReducers({
	forecastReducers: forecastReducers,
	dayReducers: dayReducers,
});
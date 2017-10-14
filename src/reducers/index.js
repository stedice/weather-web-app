// Set up your root reducer here...
import { combineReducers } from 'redux';
import forecastReducers from './forecastReducers';

export default combineReducers({
	forecastReducers: forecastReducers,
});
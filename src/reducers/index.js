// Set up your root reducer here...
import { combineReducers } from 'redux';
import forecastReducers from './forecastReducers';
import dayReducers from './dayReducers';
import { reducer as formReducers } from 'redux-form';


export default combineReducers({
	forecastReducers: forecastReducers,
	dayReducers: dayReducers,
	form: formReducers
});
import axios from "axios";
import {BASE_URL, API_KEY} from '../constants/api';

export const fetchForecast = (city='LAquila,IT') => {
  return function(dispatch) {
	//check if no API_KEY
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;

    dispatch({
      type: "FETCH_FORECAST",
      payload: axios.get(url)
    });
  };
};

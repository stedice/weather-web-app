import axios from "axios";
import {BASE_URL, API_KEY} from '../constants/api';

export const fetchForecast = (city='Roma,IT') => {
  if (!API_KEY) {
    return dispatch => {
      dispatch({
        type: "FETCH_FORECAST_REJECTED",
        payload: "missing API_KEY in src/constants/api.js"
      });
    };
  }

  return dispatch => {
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;

    dispatch({
      type: "FETCH_FORECAST",
      payload: axios.get(url)
    });
  };
};

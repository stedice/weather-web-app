import axios from "axios";
import {BASE_URL, API_KEY} from '../constants/api'

export const fetchForecast = () => {
  return function(dispatch) {
    const city ='LAquila,IT';
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;

    dispatch({
      type: "FETCH_FORECAST",
      payload: axios.get(url)
    });
  }
}
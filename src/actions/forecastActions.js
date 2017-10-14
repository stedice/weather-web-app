import axios from "axios";
import {BASE_URL, API_KEY} from '../constants/api'

export const fetchForecast = () => {
  return function(dispatch) {
    dispatch({type: "FETCH_FORECAST"});
    
    const city ='LAquila,IT';
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
    axios.get(url)
      .then((response) => {
        dispatch({type: "FETCH_FORECAST_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_FORECAST_REJECTED", payload: err})
      })
  }
}
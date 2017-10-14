const initialState = {
  fetching: false,
  fetched: false,
  city: {},
  forecast: [],
  error: null,
};

export default (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_FORECAST_PENDING": {
      return {...state, fetching: true};
    }
    case "FETCH_FORECAST_REJECTED": {
      return {...state, fetching: false, error: action.payload};
    }
    case "FETCH_FORECAST_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        city: action.payload.data.city,
        forecast: action.payload.data.list,
      };
    }
  }
  return state;
};

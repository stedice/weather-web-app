const initialState = {
  fetching: false,
  fetched: false,
  city: {}.
  forecast: [],
  error: null,
};

export default = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_PENDING": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_USERS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "FETCH_USERS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        city: action.payload.city,
        forecast: action.payload.list,
      }
      break;
    }
  }
  return state
}

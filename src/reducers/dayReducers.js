export default (state=0, action) => {
  switch (action.type) {
    case "CHANGE_DAY": {
      return action.payload;
    }
  }
  return state;
};
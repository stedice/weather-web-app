export const changeDay = (day=0) => {
  return function(dispatch) {
    dispatch({
      type: "CHANGE_DAY",
      payload: day
    });
  };
};

export const changeDay = (day=0) => {
  console.log("fire", day);
  return function(dispatch) {
    dispatch({
      type: "CHANGE_DAY",
      payload: day
    });
  };
};

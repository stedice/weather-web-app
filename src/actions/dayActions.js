export const changeDay = (day=0) => {
  return {
      type: "CHANGE_DAY",
      payload: day
    };
};

export const checkDay = (dt, day = 0) => { // day = 0,1,2,3,4
  const oneDay = 86400;
  const midnight = (new Date().setUTCHours(0, 0, 0, 0).valueOf() / 1000) + (oneDay * day);
  return (dt > midnight) && (dt <= (midnight + oneDay));
};

export const daySummary = (list) => {
  //return tmin tmax weather_mode
  let temp_min = 999;
  let temp_max = -999;
  let count = [];
  let maxCount = 0;
  let weather = {};
  list.forEach((item) => {
    temp_min = Math.min(item.main.temp_min, temp_min);
    temp_max = Math.max(item.main.temp_max, temp_max);
    count[item.weather[0].id] = count[item.weather[0].id] ? count[item.weather[0].id]++ : 1;
    if (count[item.weather[0].id] > maxCount) {
      maxCount = count[item.weather[0].id];
      weather = item.weather[0];
    }
  });
  const main = { temp_min: temp_min, temp_max: temp_max };
  return { main: main, weather: weather };
};

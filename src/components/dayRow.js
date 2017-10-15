import React from 'react';
import PropTypes from 'prop-types';


const DayRow =({item}) => {
  const rain = (item.rain && item.rain['3h']) || 0;
  return (
        <tr> 
          <th>{item.dt_txt}</th> 
          <td><img src={"http://openweathermap.org/img/w/"+item.weather[0].icon+".png"} alt={item.weather[0].description}/></td>
          <td className="text-center">{Math.floor(item.main.temp)} <small>°C</small></td> 
          <td className="text-center">{Math.floor(item.main.pressure)} <small>hPa</small></td> 
          <td className="text-center">{item.main.humidity} <small>%</small></td> 
          <td className="text-center">{item.clouds.all} <small>%</small></td> 
          <td className="text-center">{Math.round(item.wind.speed)} <small>m/s</small></td> 
          <td className="text-center">{Math.floor(item.wind.deg)}°</td> 
          <td className="text-center">{rain} <small>mm</small></td> 
        </tr>
    );
};

// props validation
DayRow.propTypes = {
  item: PropTypes.object,
};

export default DayRow;
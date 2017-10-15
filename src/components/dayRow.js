import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './weatherIcon';
import {degToCompass} from '../utils/convertUtils';


const DayRow =({item}) => {
  const rain = (item.rain && item.rain['3h']) || 0;
  const style = {
		textAlign: 'center',
		verticalAlign: 'middle'
  };
  return (
        <tr> 
          <th style={style}>{item.dt_txt.substring(11, 13)}<small>.00</small></th> 
          <td style={style}><WeatherIcon code={item.weather[0].icon} alt={item.weather[0].description}/></td>
          <td style={style}>{Math.floor(item.main.temp)} <small>°C</small></td> 
          <td style={style}>{Math.floor(item.main.pressure)} <small>hPa</small></td> 
          <td style={style}>{item.main.humidity} <small>%</small></td> 
          <td style={style}>{item.clouds.all} <small>%</small></td> 
          <td style={style}>{Math.round(item.wind.speed)} <small>m/s</small></td> 
          <td style={style}>{degToCompass(item.wind.deg)}</td> 
          <td style={style}>{rain} <small>mm</small></td> 
        </tr>
    );
};

// props validation
DayRow.propTypes = {
  item: PropTypes.object,
};

export default DayRow;
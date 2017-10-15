import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './weatherIcon';
import Time from './time';

import {degToCompass} from '../utils/convertUtils';


const DayRow =({item}) => {
  const rain = Math.round(((item.rain && item.rain['3h']) || 0) * 10)/10;
  const style = {
		textAlign: 'center',
		verticalAlign: 'middle'
  };
  return (
        <tr> 
          <th style={style}><Time txt={item.dt_txt}/></th> 
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
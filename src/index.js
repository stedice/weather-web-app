import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>

  </Provider>,
  
  //document.getElementById('app')
);
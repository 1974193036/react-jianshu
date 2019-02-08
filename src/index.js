import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { FontIconStyle } from './statics/iconfont/iconfont.js';
import App from './App';

ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
    <FontIconStyle/>
    <App />
  </Fragment>,
  document.getElementById('root')
);


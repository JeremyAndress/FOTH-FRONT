import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'
import config from 'react-global-configuration';

let URL_BACK = process.env.URL_BACK || 'http://localhost:8000/api/';

config.set({API : URL_BACK});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


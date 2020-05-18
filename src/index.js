import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'
import config from 'react-global-configuration';

// config.set({API : 'http://localhost:8000/api/'});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


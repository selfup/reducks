import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import fooReducer from './reducer'
import App from './App';

let store = createStore(fooReducer)

ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById('root')
);

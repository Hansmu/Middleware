import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Async from './middlewares/async';
import App from './components/app';
import reducers from './reducers';
// Tells Redux that whenever an action gets dispatched, make sure it flows through this middleware.
// If we'd have many middleware, we'd add them to the applyMiddleware with commas.
const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

import React from 'react';
import { render } from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )

);

render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app'));

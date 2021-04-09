import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import { createStore,applyMiddleware ,compose  } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
// import "popper.js";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
require('bootstrap');

require('@fortawesome/fontawesome-free/css/fontawesome.min.css');
require('@fortawesome/fontawesome-free/css/brands.min.css');
require('@fortawesome/fontawesome-free/css/regular.min.css');
require('@fortawesome/fontawesome-free/css/solid.min.css');



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
));

// import "bootstrap";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> <App /> </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

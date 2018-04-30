import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'Router';
import { Provider } from 'react-redux';
import getStore from 'Redux/store';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';

const store = getStore();

const App = (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();

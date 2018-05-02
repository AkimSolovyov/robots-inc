import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getStore from 'Redux/store';
import RouterData from './Router';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';

const store = getStore();

const root = (
  <Provider store={store}>
    <Fragment>{RouterData}</Fragment>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();

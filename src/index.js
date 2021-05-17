import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import {createBrowserHistory} from 'history';
import { Provider } from 'react-redux';
import { store } from './store';

import 'fontsource-roboto';
import './index.css';

import App from './App';

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

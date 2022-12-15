import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";


import App from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

import { createStore  } from 'redux';
import { Provider } from "react-redux";
import rootReducer from './reducers/index';
import {composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = { store }>
    <Router>
    <App />
    </Router>
  </Provider>
)

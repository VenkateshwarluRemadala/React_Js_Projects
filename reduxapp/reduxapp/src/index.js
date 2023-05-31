import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Reducer from './components/Reducer';
import {createStore} from "redux"
import {Provider} from "react-redux"
import { Venkat } from './Store';


let store=createStore(Reducer)
ReactDOM.render(
  <Provider store={Venkat}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

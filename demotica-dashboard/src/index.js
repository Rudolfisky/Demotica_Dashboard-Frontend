import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Timer from './Timer';
import Temp from './Temp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Timer />
    <Temp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

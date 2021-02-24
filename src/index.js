import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Books/App.jsx'
import Props from './Props/Props.jsx'
import UseState from './useState/UseState.jsx'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UseState />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

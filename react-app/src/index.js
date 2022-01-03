import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThisisRealname from './App';
// TheisRealname 부분으로 이름 지정
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThisisRealname />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

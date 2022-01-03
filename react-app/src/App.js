import React, { Component } from 'react';
// 함수 방식의 App Component가 아닌 클래스 방식의 App Component를 만들기 위해 import 추가
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div classname = "App">
          Hello, React!
      </div>

      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      // (기존 내용)
      // 가장 바깥쪽에는 하나의 태그만 있어야 한다!
      // <header></header><div></div> 혹은 태그 없이 return하면 오류 발생!
      */

      );
  }
}
// 클래스 방식의 App Component


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// 함수 방식의 App Component
*/

export default App;

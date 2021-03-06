import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Post } from './Redux/state'
import { inputChange } from './Redux/state'

let render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={ state } post={ Post } inputChange={ inputChange } />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();
subscribe(render);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

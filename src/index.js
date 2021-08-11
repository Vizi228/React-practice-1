import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let MessageData = [
  {id: 1, message: "Hi"},
  {id: 2, message: "Hello"},
  {id: 3, message: "How are you"},
  {id: 4, message: "Im ok"},
  {id: 5, message: "What about you"},
  {id: 6, message: "Im also ok"}
] 

let DialogsData = [
  {id: 1 , name: "Myron"},
  {id: 2 , name: "Oleg"},
  {id: 3 , name: "Andrew"},
  {id: 4 , name: "Dimych"},
  {id: 5 , name: "Igor"},
  {id: 6 , name: "Svetlana"},
]
let ReviewInfo = [
  { src: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg", text: "Hi, its my first post"},
  { src: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg", text: "Hi"}
]

ReactDOM.render(
  <React.StrictMode>
    <App MessageData={ MessageData } DialogsData={ DialogsData } ReviewInfo={ ReviewInfo }/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

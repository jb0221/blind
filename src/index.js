import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
  // 라우터 쓰려면 감싸줘야함
  <Provider store={store}>
    <BrowserRouter>       
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>  두번 실행되는 거 막기
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

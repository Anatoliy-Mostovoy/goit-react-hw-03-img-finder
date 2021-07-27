import React from 'react';
import ReactDOM from 'react-dom';
import s from './index.module.css';
import { App } from './Components/App';

ReactDOM.render(
  <React.StrictMode>
    <App className={s} />
  </React.StrictMode>,
  document.getElementById('root'),
);

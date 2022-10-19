import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import {Provider} from 'mobx-react'
import store from './store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider {...store}>
    <App />
  </Provider>
);


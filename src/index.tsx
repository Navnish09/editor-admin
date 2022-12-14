import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { ROUTE_BASENAME } from './configs/constants';

import "./assets/scss/style.scss";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    {/* TODO :-  Make sure to remove this one when the app is deployed to a root directory */}
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </React.StrictMode>
);
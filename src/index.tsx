import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./assets/scss/style.scss";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* Make sure to remove this one when the app is deployed to a root directory */}
    <BrowserRouter basename='/editor-admin'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
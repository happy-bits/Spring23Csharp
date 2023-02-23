import React from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Email from './email/Email'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <h1>Hej hej</h1>

    <Email />
    <Email />

    <p>Lite text</p>

  </React.StrictMode>
);



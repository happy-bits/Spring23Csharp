/* eslint no-unused-vars: "off" */ 

import React from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './custom.css'

import Email from './email/Email'
import Movie from './movie/Movie'

import goodBadUgly from './movie/posters/good-bad-ugly.jpg'
import ghostbusters from './movie/posters/ghostbusters.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <div className="container mt-3">

      <div className="my-5">
      <Movie title="Ghostbusters" poster={ghostbusters} maxstars={7} />
      </div>

      <div className="my-5">
      <Movie />
      </div>

    </div>

  </React.StrictMode>
);


/*  <Email success-message="Good work!" background="cornsilk"  border-thickness={10} />  */ 
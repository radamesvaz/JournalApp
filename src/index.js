import React from 'react';
import ReactDOM from 'react-dom';


import { JournalApp } from './JournalApp';
import './styles/styles.scss';  // Hay que instalar el modulo de Sass, npm i sass || node-sass ya está deprecated, NO instalar


ReactDOM.render(
    <JournalApp />,
  document.getElementById('root')
);

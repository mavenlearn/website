import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

render(
  <App />,
  document.getElementById('root')
);

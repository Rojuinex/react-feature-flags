import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FeatureFlags } from './FeatureFlags';
import './index.css';

// To load from anywhere (fetch, localStorage, a json file, Redux...)
const flags = [
  { name: 'vipOnly', isActive: false },
  { name: 'adminOnly', isActive: true }
];

ReactDOM.render(
  <FeatureFlags.Provider value={flags}>
    <App />
  </FeatureFlags.Provider>,
  document.getElementById('root')
);
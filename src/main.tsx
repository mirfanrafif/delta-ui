import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import '../styles/globals.css';
import '../styles/variables.css';
import '../styles/components.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <div id="popup-root"></div>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import CategoryProvider from './components/Context/CategoryProvider';
import AuthProvider from './components/Context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CategoryProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </CategoryProvider>
);


reportWebVitals();

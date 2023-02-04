import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AdminProvider from './components/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AdminProvider>
      <App />
    </AdminProvider>
  </BrowserRouter>
);



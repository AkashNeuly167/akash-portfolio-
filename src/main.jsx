import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster 
      position="top-right"
    toastOptions={{
      style: {
        background: '#2a2a2a',
        color: '#fff',
        border: '1px solid #f97316',
      },
      success: {
        iconTheme: {
          primary: '#f97316',
          secondary: '#1a1a1a',
        },
      },
      error: {
        iconTheme: {
          primary: '#ef4444',
          secondary: '#1a1a1a',
        },
      },
    }}
      />
    </BrowserRouter>
  </React.StrictMode>
);

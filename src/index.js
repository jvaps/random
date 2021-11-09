import React from 'react';
import * as ReactDOM from "react-dom";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './providers/auth';

ReactDOM.render(
  <React.StrictMode>
   <AuthProvider>
     <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

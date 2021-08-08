import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { DataProvider } from './context/DataContext';

ReactDOM.render(
   <React.StrictMode>
      <DataProvider>
         <Router>
            <App />
         </Router>
      </DataProvider>
   </React.StrictMode>,
   document.getElementById('root'),
);

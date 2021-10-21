import React from 'react';
import Routes from './routes';
import {Router} from 'react-router-dom'
import { createBrowserHistory } from 'history';

export default function App() {
  
  const history = createBrowserHistory();
  
  return (
    <Router history={history}>
      
      <Routes/>
    </Router>
  );
}

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import App from './App'
import './index.css'

// add Browser Routing to route to screens by path
ReactDOM.render(
  	<BrowserRouter>
  		<App />
  	</BrowserRouter>, 
  
  	document.getElementById('root')
);

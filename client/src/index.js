import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './stylesheets/custom.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
	
import './font/ChubbyChoo-Regular.woff';
import './font/ChubbyChoo-Regular.ttf';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

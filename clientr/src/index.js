import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

import './stylesheets/custom.css';
import './stylesheets/profile.css';
import './stylesheets/tablestyle.css';
import { Provider } from 'react-redux';
import store from './store'
import './font/ChubbyChoo-Regular.woff';
import './font/ChubbyChoo-Regular.ttf';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

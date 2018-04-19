import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import 'animate.css';
import App from './App';
import registerServiceWorker from './config/registerServiceWorker';
// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

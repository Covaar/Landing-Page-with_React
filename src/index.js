import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // JS

import * as data from './data/info';

import { Main } from './Main';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Main {...data} />); // Spread operator

// react
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// packages
import axios from 'axios';

// components
import App from './components/site/App';


const token = localStorage.getItem('token');

if (token) {

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

}

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app'),
);

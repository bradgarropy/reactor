// react
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import Navigation from './components/Navigation';


const App = () => (

    <BrowserRouter>
        <Route path="/" component={Navigation} />
    </BrowserRouter>

);


render(<App />, document.getElementById('app'));

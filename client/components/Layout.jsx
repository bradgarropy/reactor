// react
import React from 'react';
import { Route } from 'react-router-dom';

// components
import Weight from './Weight';
import Navigation from './Navigation';
import WeightForm from './WeightForm';


const Layout = () => (

    <div id="layout">
        <Route path="/" component={Navigation} />
        <Route exact path="/" component={Weight} />
        <Route path="/add" component={WeightForm} />
    </div>

);


export default Layout;

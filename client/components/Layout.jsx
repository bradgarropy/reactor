// react
import React from 'react';
import { Route } from 'react-router-dom';

// components
import Weight from '../views/Weight';
import Navigation from './Navigation';
import EditWeight from '../views/EditWeight';


const Layout = () => (

    <div id="layout">
        <Route path="/" component={Navigation} />
        <Route exact path="/" component={Weight} />
        <Route exact path="/edit/:id" component={EditWeight} />
    </div>

);


export default Layout;

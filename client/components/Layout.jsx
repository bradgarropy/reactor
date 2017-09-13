// react
import React from 'react';
import { Route } from 'react-router-dom';

// components
import Weight from '../views/Weight';
import Welcome from '../views/Welcome';
import Register from '../views/Register';
import Navigation from './Navigation';
import EditWeight from '../views/EditWeight';


const Layout = () => (

    <div id="layout">
        <Route path="/" component={Navigation} />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/weight" component={Weight} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/edit/:id" component={EditWeight} />
    </div>

);


export default Layout;

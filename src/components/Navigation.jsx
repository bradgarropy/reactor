// react
import React from 'react';
import { Route, Link } from 'react-router-dom';

// components
import Welcome from './Welcome';
import Register from './Register';
import Login from './Login';
import Forgot from './Forgot';
import Todos from './Todos';


const Navigation = () => (

    <div id="navigation">

        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">
                            <span className="glyphicon glyphicon-home" />
                        </Link>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <Route exact path="/" component={Welcome} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/todos" component={Todos} />

    </div>

);


export default Navigation;

// react
import React from 'react';
import { Link } from 'react-router-dom';


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

    </div>

);


export default Navigation;

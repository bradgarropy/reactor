// react
import React from 'react';
import { Link } from 'react-router-dom';

// packages
import axios from 'axios';

// components
import Banner from './Banner';

// utils
import { isAuthenticated, userFirstName } from '../../utils/authentication';


class Navigation extends React.Component {


    constructor(props) {

        super(props);

        this.handleLogout = this.handleLogout.bind(this);

    }

    handleLogout() {

        localStorage.removeItem('token');
        delete axios.defaults.headers.common.Authorization;
        this.props.history.push('/');

    }

    render() {

        const firstName = userFirstName();

        const authenticated = (
            <div className="container-fluid">

                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">
                            <span className="glyphicon glyphicon-home" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/weight">
                            <span className="glyphicon glyphicon-scale" />
                        </Link>
                    </li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a role="button" className="dropdown-toggle" data-toggle="dropdown">
                            {firstName} <span className="glyphicon glyphicon-user" />
                            <span className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <a role="button" tabIndex="0" onClick={this.handleLogout}>Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
        );


        const unauthenticated = (
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
        );

        return (
            <div id="navigation">

                <nav className="navbar navbar-default">
                    {isAuthenticated() ? authenticated : unauthenticated}
                </nav>

            </div>
        );

    }

}


export default Navigation;

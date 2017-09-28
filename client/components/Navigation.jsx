// react
import React from 'react';
import { Link } from 'react-router-dom';

// utils
import { isAuthenticated } from '../utils/authentication';


class Navigation extends React.Component {


    constructor(props) {

        super(props);

        this.handleLogout = this.handleLogout.bind(this);

    }

    handleLogout() {

        localStorage.removeItem('token');
        this.props.history.push('/');

    }

    render() {

        const authenticated = (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <a role="button" tabIndex="0" onClick={this.handleLogout}>Logout</a>
                </li>
            </ul>
        );


        const unauthenticated = (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        );

        return (
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

                        {isAuthenticated() ? authenticated : unauthenticated}

                    </div>
                </nav>

            </div>
        );

    }

}


export default Navigation;

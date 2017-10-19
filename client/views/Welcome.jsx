// react
import React from 'react';
import { Link } from 'react-router-dom';

// utils
import { isAuthenticated, userInfo } from '../utils/authentication';


class Welcome extends React.Component {

    render() {

        console.log(process.env.API_URL);

        const user = userInfo();

        const authenticated = (

            <div className="container">

                <h1>Welcome, {user.first_name}.</h1>

            </div>
        );


        const unauthenticated = (

            <div className="container">

                <h1>Welcome.</h1>

                <h4>
                    Please <Link to="/register">register</Link> or <Link to="/login">login</Link>.
                </h4>

            </div>

        );

        return (
            isAuthenticated() ? authenticated : unauthenticated
        );

    }

}


export default Welcome;

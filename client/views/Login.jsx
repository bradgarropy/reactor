// react
import React from 'react';

// packages
import axios from 'axios';

// components
import LoginForm from '../components/user/LoginForm';

// api
import login from '../api/login';


class Login extends React.Component {

    constructor(props) {

        super(props);

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(data) {

        login(data).then(
            (response) => {

                localStorage.setItem('token', response.token);
                axios.defaults.headers.common.Authorization = `Bearer ${response.token}`;
                this.props.history.push('/');

            });

    }

    render() {

        return (
            <div className="container">
                <h1>Login</h1>

                <br />

                <LoginForm
                    submit={this.onSubmit}
                />

            </div>
        );

    }

}


export default Login;

// react
import React from 'react';

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

                console.log(response);

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

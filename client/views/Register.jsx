// react
import React from 'react';

// components
import RegisterForm from '../components/user/RegisterForm';

// api
import { createUser } from '../api/user';


class Register extends React.Component {

    constructor(props) {

        super(props);

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(data) {

        createUser(data).then(
            () => {

                this.props.history.push('/');

            });

    }

    render() {

        return (
            <div className="container">
                <h1>Register</h1>

                <br />

                <RegisterForm
                    submit={this.onSubmit}
                />

            </div>
        );

    }

}


export default Register;

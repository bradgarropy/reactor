// react
import React from 'react';

// components
import RegisterForm from '../components/user/RegisterForm';


class Register extends React.Component {

    onSubmit(event) {

        console.log('onsubmit');

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

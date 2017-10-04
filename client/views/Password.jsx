// react
import React from 'react';

// components
import PasswordForm from '../components/user/PasswordForm';

// api
import changePassword from '../api/password';


class Password extends React.Component {

    constructor(props) {

        super(props);

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(data) {

        console.log('password');

        changePassword(data).then(
            (response) => {

                console.log(response);
                this.props.history.push('/');

            },
        );

    }

    render() {

        return (
            <div className="container">
                <h1>Password</h1>

                <br />

                <PasswordForm
                    submit={this.onSubmit}
                />

            </div>
        );

    }

}


export default Password;

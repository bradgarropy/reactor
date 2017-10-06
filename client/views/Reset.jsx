// react
import React from 'react';

// components
import ResetForm from '../components/user/ResetForm';

// api
import resetPassword from '../api/reset';


class Reset extends React.Component {

    constructor(props) {

        super(props);

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(data) {

        const token = this.props.match.params.token;

        resetPassword(token, data).then(
            (response) => {

                this.props.history.push('/');

            },
        );

    }

    render() {

        return (
            <div className="container">
                <h1>Reset</h1>

                <br />

                <ResetForm
                    submit={this.onSubmit}
                />

            </div>
        );

    }

}


export default Reset;

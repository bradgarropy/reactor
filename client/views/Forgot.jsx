// react
import React from 'react';

// packages
import axios from 'axios';

// components
import ForgotForm from '../components/user/ForgotForm';

// api
import forgot from '../api/forgot';


class Forgot extends React.Component {

    constructor(props) {

        super(props);

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(data) {

        forgot(data).then(
            () => {

                this.props.history.push('/');

            },
        );

    }

    render() {

        return (
            <div className="container">
                <h1>Forgot</h1>

                <br />

                <ForgotForm
                    submit={this.onSubmit}
                />

            </div>
        );

    }

}


export default Forgot;

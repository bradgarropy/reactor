// react
import React from 'react';
import { withRouter } from 'react-router-dom';

// components
import PasswordInput from '../common/PasswordInput';

// api
import resetPassword from '../../api/reset';


class ResetForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            password: '',
            confirmation: '',
            errors: {},
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onSubmit(event) {

        event.preventDefault();

        const token = this.props.match.params.token;

        resetPassword(token, this.state)
            .then((response) => {

                console.log(response);
                this.props.history.push('/');

            })
            .catch((error) => {

                const errors = error.response.data.errors;

                console.log(errors);
                this.setState({ errors });

            });

    }

    onChange(event) {

        this.setState({ [event.target.name]: event.target.value });

    }

    render() {

        return (

            <form onSubmit={this.onSubmit}>

                <PasswordInput
                    label="Password"
                    name="password"
                    value={this.state.password}
                    error={this.state.errors.password}
                    onChange={this.onChange}
                />

                <PasswordInput
                    label="Confirm Password"
                    name="confirmation"
                    value={this.state.confirmation}
                    error={this.state.errors.confirmation}
                    onChange={this.onChange}
                />

                <button className="btn btn-default" type="submit">Update</button>

            </form>

        );

    }

}


ResetForm.propTypes = {

};


ResetForm.defaultProps = {

};


export default withRouter(ResetForm);

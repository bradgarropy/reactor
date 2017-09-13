// react
import React from 'react';
import PropTypes from 'prop-types';

// components
import TextInput from './TextInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';


class RegisterForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirmation: '',
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onSubmit(event) {

        event.preventDefault();
        this.props.submit(this.state.date, this.state.weight);

    }

    onChange(event) {

        this.setState({ [event.target.name]: event.target.value });

    }

    render() {

        return (

            <form onSubmit={this.onSubmit}>

                <TextInput
                    label="First Name"
                    name="first_name"
                    placeholder="First Name"
                    value={this.state.first_name}
                    onChange={this.onChange}
                />

                <TextInput
                    label="Last Name"
                    name="last_name"
                    placeholder="Last Name"
                    value={this.state.last_name}
                    onChange={this.onChange}
                />

                <EmailInput
                    label="Email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChange}
                />

                <PasswordInput
                    label="Password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange}
                />

                <PasswordInput
                    label="Confirm Password"
                    name="confirmation"
                    placeholder="Confirm Password"
                    value={this.state.confirmation}
                    onChange={this.onChange}
                />

                <button className="btn btn-default" type="submit">Submit</button>

            </form>

        );

    }

}


RegisterForm.propTypes = {
    submit: PropTypes.func.isRequired,
};


RegisterForm.defaultProps = {

};


export default RegisterForm;

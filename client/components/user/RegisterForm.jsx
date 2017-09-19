// react
import React from 'react';
import PropTypes from 'prop-types';

// components
import Input from '../common/Input';


class RegisterForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            first_name: '',
            middle_name: '',
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
        this.props.submit(this.state);

    }

    onChange(event) {

        this.setState({ [event.target.name]: event.target.value });

    }

    render() {

        return (

            <form onSubmit={this.onSubmit}>

                <Input
                    label="First Name"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={this.state.first_name}
                    onChange={this.onChange}
                />

                <Input
                    label="Last Name"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={this.state.last_name}
                    onChange={this.onChange}
                />

                <Input
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChange}
                />

                <Input
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange}
                />

                <Input
                    label="Confirm Password"
                    type="password"
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

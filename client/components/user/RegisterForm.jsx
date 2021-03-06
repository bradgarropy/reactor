// react
import React from 'react';
import { withRouter } from 'react-router-dom';

// components
import TextInput from '../common/TextInput';
import EmailInput from '../common/EmailInput';
import PasswordInput from '../common/PasswordInput';

// api
import { createUser } from '../../api/user';


class RegisterForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirmation: '',
            errors: {},
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onSubmit(event) {

        event.preventDefault();

        createUser(this.state)
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

                <TextInput
                    label="First Name"
                    name="first_name"
                    placeholder="First Name"
                    value={this.state.first_name}
                    error={this.state.errors.first_name}
                    onChange={this.onChange}
                />

                <TextInput
                    label="Last Name"
                    name="last_name"
                    placeholder="Last Name"
                    value={this.state.last_name}
                    error={this.state.errors.last_name}
                    onChange={this.onChange}
                />

                <EmailInput
                    label="Email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    error={this.state.errors.email}
                    onChange={this.onChange}
                />

                <PasswordInput
                    label="Password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    error={this.state.errors.password}
                    onChange={this.onChange}
                />

                <PasswordInput
                    label="Confirm Password"
                    name="confirmation"
                    placeholder="Confirm Password"
                    value={this.state.confirmation}
                    error={this.state.errors.confirmation}
                    onChange={this.onChange}
                />

                <button className="btn btn-default" type="submit">Submit</button>

            </form>

        );

    }

}


RegisterForm.propTypes = {

};


RegisterForm.defaultProps = {

};


export default withRouter(RegisterForm);

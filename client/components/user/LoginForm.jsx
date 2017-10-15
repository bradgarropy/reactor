// react
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// packages
import axios from 'axios';

// components
import EmailInput from '../common/EmailInput';
import PasswordInput from '../common/PasswordInput';

// api
import login from '../../api/login';


class LoginForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {},
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onSubmit(event) {

        event.preventDefault();

        login(this.state)
            .then((response) => {

                const token = response.data.token;

                localStorage.setItem('token', token);
                axios.defaults.headers.common.Authorization = `Bearer ${token}`;
                this.props.history.push('/');

            })
            .catch((error) => {

                const errors = error.response.data.errors;

                this.setState({ errors });

            });

    }

    onChange(event) {

        this.setState({ [event.target.name]: event.target.value });

    }

    render() {

        return (

            <form onSubmit={this.onSubmit}>

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

                <button className="btn btn-default" type="submit">Submit</button>

                <div className="pull-right">
                    <Link to="/forgot">Forgot Password?</Link>
                </div>

            </form>

        );

    }

}


LoginForm.propTypes = {

};


LoginForm.defaultProps = {

};


export default withRouter(LoginForm);

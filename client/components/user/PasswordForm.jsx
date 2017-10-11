// react
import React from 'react';
import { withRouter } from 'react-router-dom';

// components
import PasswordInput from '../common/PasswordInput';

// api
import changePassword from '../../api/password';


class PasswordForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            current_password: '',
            new_password: '',
            confirmation: '',
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onSubmit(event) {

        event.preventDefault();

        changePassword(this.state).then(
            (response) => {

                console.log(response);
                this.props.history.push('/');

            },
        );

    }

    onChange(event) {

        this.setState({ [event.target.name]: event.target.value });

    }

    render() {

        return (

            <form onSubmit={this.onSubmit}>

                <PasswordInput
                    label="Current Password"
                    name="current_password"
                    value={this.state.current_password}
                    onChange={this.onChange}
                />

                <PasswordInput
                    label="New Password"
                    name="new_password"
                    value={this.state.new_password}
                    onChange={this.onChange}
                />

                <PasswordInput
                    label="Confirm Password"
                    name="confirmation"
                    value={this.state.confirmation}
                    onChange={this.onChange}
                />

                <button className="btn btn-default" type="submit">Update</button>

            </form>

        );

    }

}


PasswordForm.propTypes = {

};


PasswordForm.defaultProps = {

};


export default withRouter(PasswordForm);

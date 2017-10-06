// react
import React from 'react';
import PropTypes from 'prop-types';

// components
import PasswordInput from '../common/PasswordInput';


class ResetForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
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

                <PasswordInput
                    label="Password"
                    name="password"
                    value={this.state.password}
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


ResetForm.propTypes = {
    submit: PropTypes.func.isRequired,
};


ResetForm.defaultProps = {

};


export default ResetForm;

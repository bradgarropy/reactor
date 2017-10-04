// react
import React from 'react';
import PropTypes from 'prop-types';

// components
import EmailInput from '../common/EmailInput';


class ForgotForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            email: '',
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

                <EmailInput
                    label="Email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChange}
                />

                <button className="btn btn-default" type="submit">Submit</button>

            </form>

        );

    }

}


ForgotForm.propTypes = {
    submit: PropTypes.func.isRequired,
};


ForgotForm.defaultProps = {

};


export default ForgotForm;

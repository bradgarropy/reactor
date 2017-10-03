// react
import React from 'react';
import PropTypes from 'prop-types';

// components
import TextInput from '../common/TextInput';
import EmailInput from '../common/EmailInput';


class ProfileForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            first_name: props.first_name,
            last_name: props.last_name,
            email: props.email,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    componentWillReceiveProps(props) {

        this.setState({
            first_name: props.first_name,
            last_name: props.last_name,
            email: props.email,
        });

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

                <button className="btn btn-default" type="submit">Submit</button>

            </form>

        );

    }

}


ProfileForm.propTypes = {
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    submit: PropTypes.func.isRequired,
};


ProfileForm.defaultProps = {
    first_name: undefined,
    last_name: undefined,
    email: undefined,
};


export default ProfileForm;

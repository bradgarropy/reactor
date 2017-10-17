// react
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// components
import TextInput from '../common/TextInput';
import EmailInput from '../common/EmailInput';

// api
import { getUser, updateUser } from '../../api/user';

// utils
import { userId } from '../../utils/authentication';


class ProfileForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            errors: {},
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    componentDidMount() {

        const id = userId();

        getUser(id)
            .then((response) => {

                const user = response.data;
                this.setState({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                });

            });

    }

    onSubmit(event) {

        event.preventDefault();

        const id = userId();

        updateUser(id, this.state)
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

                <button className="btn btn-default" type="submit">Submit</button>

                <div className="pull-right">
                    <Link to="/password">Password Settings</Link>
                </div>

            </form>

        );

    }

}


ProfileForm.propTypes = {

};


ProfileForm.defaultProps = {

};


export default withRouter(ProfileForm);

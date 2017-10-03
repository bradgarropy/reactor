// react
import React from 'react';

// components
import ProfileForm from '../components/user/ProfileForm';

// api
import { getUser, updateUser } from '../api/user';

// utils
import { userId } from '../utils/authentication';


class Profile extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            user: {},
        };

        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount() {

        const id = userId();

        getUser(id).then(
            user => this.setState({ user }),
        );

    }

    onSubmit(data) {

        const id = userId();

        updateUser(id, data).then(
            (user) => {

                this.setState({ user });
                this.props.history.push('/');

            });

    }

    render() {

        return (
            <div className="container">
                <h1>Profile</h1>

                <br />

                <ProfileForm
                    first_name={this.state.user.first_name}
                    last_name={this.state.user.last_name}
                    email={this.state.user.email}
                    submit={this.onSubmit}
                />

            </div>
        );

    }

}


export default Profile;

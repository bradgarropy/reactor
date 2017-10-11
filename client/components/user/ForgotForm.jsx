// react
import React from 'react';
import { withRouter } from 'react-router-dom';

// components
import EmailInput from '../common/EmailInput';

// api
import forgot from '../../api/forgot';


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

        forgot(this.state).then(
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

};


ForgotForm.defaultProps = {

};


export default withRouter(ForgotForm);

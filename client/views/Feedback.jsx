// react
import React from 'react';

// components
import FeedbackForm from '../components/user/FeedbackForm';

// api
import feedback from '../api/feedback';


class Feedback extends React.Component {

    constructor(props) {

        super(props);

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(data) {

        feedback(data).then(
            () => {

                this.props.history.push('/');

            },
        );

    }

    render() {

        return (
            <div className="container">
                <h1>Feedback</h1>

                <br />

                <FeedbackForm
                    submit={this.onSubmit}
                />

            </div>
        );

    }

}


export default Feedback;

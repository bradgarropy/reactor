// react
import React from 'react';
import PropTypes from 'prop-types';

// packages
import moment from 'moment';

// components
import Input from '../common/Input';

// api
import { createWeight } from '../../api/weight';


class WeightForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            date: moment().format('YYYY-MM-DD'),
            weight: '',
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onSubmit(event) {

        event.preventDefault();

        createWeight(this.state)
            .then((response) => {

                const weight = response.data;

                console.log(weight);
                this.props.submit(weight);

            });

    }

    onChange(event) {

        this.setState({ [event.target.name]: event.target.value });

    }

    render() {

        return (

            <form onSubmit={this.onSubmit}>

                <Input
                    label="Date"
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange}
                />

                <Input
                    label="Weight"
                    type="number"
                    name="weight"
                    value={this.state.weight}
                    onChange={this.onChange}
                />

                <button className="btn btn-default" type="submit">Submit</button>

            </form>

        );

    }

}


WeightForm.propTypes = {
    submit: PropTypes.func,
};


WeightForm.defaultProps = {
    submit: undefined,
};


export default WeightForm;

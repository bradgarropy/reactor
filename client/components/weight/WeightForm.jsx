// react
import React from 'react';
import PropTypes from 'prop-types';

// packages
import moment from 'moment';

// components
import DateInput from './DateInput';
import NumberInput from './NumberInput';


class WeightForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            date: props.date,
            weight: props.weight,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }


    componentWillReceiveProps(nextprops) {

        if (nextprops.date) {

            this.setState({
                date: moment(nextprops.date).utc().format('YYYY-MM-DD'),
            });

        }

        this.setState({
            weight: nextprops.weight,
        });

    }

    onSubmit(event) {

        event.preventDefault();
        this.props.add(this.state.date, this.state.weight);

    }

    onChange(event) {

        this.setState({
            [event.target.name]: event.target.value,
        });

    }

    render() {

        return (

            <form onSubmit={this.onSubmit}>

                <DateInput
                    label="Date"
                    name="date"
                    value={this.props.date}
                    onChange={this.onChange}
                />

                <NumberInput
                    label="Weight"
                    name="weight"
                    value={this.props.weight}
                    onChange={this.onChange}
                />

                <button className="btn btn-default" type="submit">Submit</button>

            </form>

        );

    }

}


WeightForm.propTypes = {
    add: PropTypes.func.isRequired,
    date: PropTypes.string,
    weight: PropTypes.number,
};


WeightForm.defaultProps = {
    date: undefined,
    weight: undefined,
};


export default WeightForm;

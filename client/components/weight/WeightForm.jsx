// react
import React from 'react';
import PropTypes from 'prop-types';

// packages
import moment from 'moment';

// components
import Input from '../common/Input';


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
        this.props.submit(this.state.date, this.state.weight);

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
    submit: PropTypes.func.isRequired,
    date: PropTypes.string,
    weight: PropTypes.number,
};


WeightForm.defaultProps = {
    date: undefined,
    weight: undefined,
};


export default WeightForm;

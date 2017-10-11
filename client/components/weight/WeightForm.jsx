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


    componentWillReceiveProps(props) {

        this.setState({
            date: moment(props.date).utc().format('YYYY-MM-DD'),
            weight: props.weight,
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
    date: PropTypes.string,
    weight: PropTypes.number,
    submit: PropTypes.func.isRequired,
};


WeightForm.defaultProps = {
    date: undefined,
    weight: undefined,
};


export default WeightForm;

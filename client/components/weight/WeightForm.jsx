// react
import React from 'react';
import PropTypes from 'prop-types';

// packages
import moment from 'moment';


class WeightForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            date: '',
            weight: '',
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    componentWillReceiveProps(nextprops) {

        if (nextprops.date || nextprops.weight) {

            this.setState({
                date: moment(nextprops.date).utc().format('YYYY-MM-DD'),
                weight: nextprops.weight,
            });

        }

    }

    onSubmit(event) {

        event.preventDefault();
        this.props.add(this.state.date, this.state.weight);

    }

    onChange(event) {

        this.setState({ [event.target.name]: event.target.value });

    }

    render() {

        return (

            <form onSubmit={this.onSubmit}>

                <div className="form-group">

                    <label htmlFor="date">
                        Date
                    </label>

                    <input
                        className="form-control"
                        name="date"
                        type="date"
                        value={this.state.date}
                        onChange={this.onChange}
                    />
                </div>

                <div className="form-group">

                    <label htmlFor="weight">
                        Weight
                    </label>

                    <input
                        className="form-control"
                        name="weight"
                        type="number"
                        value={this.state.weight}
                        onChange={this.onChange}
                    />

                </div>

                <button className="btn btn-default" type="submit">Submit</button>

            </form>

        );

    }

}


WeightForm.propTypes = {
    add: PropTypes.func.isRequired,
};


export default WeightForm;

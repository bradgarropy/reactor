// react
import React from 'react';
import PropTypes from 'prop-types';

// packages
import moment from 'moment';


class DateInput extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            name: props.name,
            label: props.label,
            value: '',
        };

        this.onChange = this.onChange.bind(this);

    }

    componentWillReceiveProps(nextprops) {

        if (nextprops.value) {

            this.setState({
                value: moment(nextprops.value).utc().format('YYYY-MM-DD'),
            });

        }

    }

    onChange(event) {

        this.setState({ value: event.target.value });
        this.props.onChange(event);

    }

    render() {

        return (

            <div className="form-group">

                <label htmlFor={this.props.name}>
                    {this.props.label}
                </label>

                <input
                    className="form-control"
                    name={this.props.name}
                    type="date"
                    value={this.state.value}
                    onChange={this.onChange}
                />
            </div>

        );

    }

}


DateInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};


export default DateInput;

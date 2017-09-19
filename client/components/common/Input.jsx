// react
import React from 'react';
import PropTypes from 'prop-types';


const DateInput = props => (

    <div className="form-group">

        <label htmlFor={props.name}>
            {props.label}
        </label>

        <input
            className="form-control"
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    </div>

);


DateInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};


DateInput.defaultProps = {
    placeholder: '',
    value: '',
};


export default DateInput;

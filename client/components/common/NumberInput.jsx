// react
import React from 'react';
import PropTypes from 'prop-types';


const NumberInput = props => (

    <div className="form-group">

        <label htmlFor={props.name}>
            {props.label}
        </label>

        <input
            className="form-control"
            type="number"
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    </div>

);


NumberInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};


NumberInput.defaultProps = {
    placeholder: '',
    value: '',
};


export default NumberInput;

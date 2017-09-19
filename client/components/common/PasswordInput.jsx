// react
import React from 'react';
import PropTypes from 'prop-types';


const PasswordInput = props => (

    <div className="form-group">

        <label htmlFor={props.name}>
            {props.label}
        </label>

        <input
            className="form-control"
            type="password"
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    </div>

);


PasswordInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};


PasswordInput.defaultProps = {
    placeholder: '',
    value: '',
};


export default PasswordInput;

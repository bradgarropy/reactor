// react
import React from 'react';
import PropTypes from 'prop-types';


const TextInput = props => (

    <div className="form-group">

        <label htmlFor={props.name}>
            {props.label}
        </label>

        <input
            className="form-control"
            type="text"
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    </div>

);


TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};


TextInput.defaultProps = {
    placeholder: '',
    value: '',
};


export default TextInput;

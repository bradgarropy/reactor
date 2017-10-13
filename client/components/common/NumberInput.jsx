// react
import React from 'react';
import PropTypes from 'prop-types';

// packages
import classNames from 'classnames';


const NumberInput = props => (

    <div className={classNames('form-group', { 'has-error': props.error })}>

        <label className="control-label" htmlFor={props.name}>
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

        {props.error && <span className="help-block">{props.error.msg}</span>}

    </div>

);


NumberInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.object,
    onChange: PropTypes.func.isRequired,
};


NumberInput.defaultProps = {
    placeholder: undefined,
    value: undefined,
    error: undefined,
};


export default NumberInput;

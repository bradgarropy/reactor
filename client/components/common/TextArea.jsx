// react
import React from 'react';
import PropTypes from 'prop-types';

// packages
import classNames from 'classnames';


const TextArea = props => (

    <div className={classNames('form-group', { 'has-error': props.error })}>

        <label className="control-label" htmlFor={props.name}>
            {props.label}
        </label>

        <textarea
            className="form-control"
            name={props.name}
            placeholder={props.placeholder}
            rows={props.rows}
            value={props.value}
            onChange={props.onChange}
        />

        {props.error && <span className="help-block">{props.error.msg}</span>}

    </div>

);


TextArea.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    value: PropTypes.string,
    error: PropTypes.object,
    onChange: PropTypes.func.isRequired,
};


TextArea.defaultProps = {
    placeholder: undefined,
    rows: undefined,
    value: undefined,
    error: undefined,
};


export default TextArea;

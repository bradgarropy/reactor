// react
import React from 'react';
import PropTypes from 'prop-types';


const TextArea = props => (

    <div className="form-group">

        <label htmlFor={props.name}>
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
    placeholder: '',
    rows: undefined,
    value: '',
    error: {},
};


export default TextArea;

// react
import React from 'react';
import PropTypes from 'prop-types';


class PasswordInput extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            name: props.name,
            label: props.label,
            placeholder: props.placeholder,
            value: '',
        };

        this.onChange = this.onChange.bind(this);

    }

    componentWillReceiveProps(nextprops) {

        if (nextprops.value) {

            this.setState({
                value: nextprops.value,
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
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.onChange}
                />
            </div>

        );

    }

}


PasswordInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};


PasswordInput.defaultProps = {
    placeholder: '',
};


export default PasswordInput;

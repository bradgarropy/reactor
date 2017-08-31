// react
import React from 'react';
import PropTypes from 'prop-types';


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

    onSubmit(event) {

        event.preventDefault();

        this.props.add(this.state.date, this.state.weight);

    }

    onChange(event) {

        this.setState({ [event.target.name]: event.target.value });

    }

    render() {

        return (
            <div id="weight-form">

                <form className="form-inline text-center" onSubmit={this.onSubmit}>

                    <div className="form-group">

                        <input
                            className="form-control"
                            name="date"
                            type="date"
                            value={this.state.date}
                            onChange={this.onChange}
                        />

                    </div>

                    <div className="form-group">

                        <input
                            className="form-control"
                            name="weight"
                            type="number"
                            value={this.state.weight}
                            onChange={this.onChange}
                        />

                    </div>

                    <button className="btn btn-default" type="submit">Add</button>

                </form>

            </div>
        );

    }

}

WeightForm.propTypes = {
    add: PropTypes.func.isRequired,
};


export default WeightForm;

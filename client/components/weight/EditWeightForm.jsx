// react
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// packages
import moment from 'moment';

// components
import Input from '../common/Input';

// api
import { updateWeight } from '../../api/weight';


class EditWeightForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            id: props.id,
            date: props.date,
            weight: props.weight,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }


    componentWillReceiveProps(props) {

        this.setState({
            id: props.id,
            date: moment(props.date).utc().format('YYYY-MM-DD'),
            weight: props.weight,
        });

    }

    onSubmit(event) {

        event.preventDefault();

        const data = {
            date: this.state.date,
            weight: this.state.weight,
        };


        updateWeight(this.state.id, data)
            .then((response) => {

                console.log(response);
                this.props.history.push('/weight');

            });

    }

    onChange(event) {

        this.setState({ [event.target.name]: event.target.value });

    }

    render() {

        return (

            <form onSubmit={this.onSubmit}>

                <Input
                    label="Date"
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange}
                />

                <Input
                    label="Weight"
                    type="number"
                    name="weight"
                    value={this.state.weight}
                    onChange={this.onChange}
                />

                <button className="btn btn-default" type="submit">Submit</button>

            </form>

        );

    }

}


EditWeightForm.propTypes = {
    id: PropTypes.string,
    date: PropTypes.string,
    weight: PropTypes.number,
};


EditWeightForm.defaultProps = {
    id: undefined,
    date: undefined,
    weight: undefined,
};


export default withRouter(EditWeightForm);

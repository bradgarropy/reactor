// react
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// packages
import moment from 'moment';


class WeightEntry extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            editing: null,
        };

        this.handleDelete = this.handleDelete.bind(this);

    }

    handleDelete() {

        this.props.delete(this.props.weight._id);

    }

    render() {

        return (
            <tr>
                <td className="text-center">{moment(this.props.weight.date).utc().format('MM/DD/YYYY')}</td>
                <td className="text-center">{this.props.weight.weight}</td>
                <td className="text-center">
                    <a role="button" tabIndex="0" onClick={this.handleDelete}>
                        <span className="glyphicon glyphicon-trash text-danger" />
                    </a>
                </td>
                <td className="text-center">
                    <Link to={`/edit/${this.props.weight._id}`}>
                        <span className="glyphicon glyphicon-edit text-info" />
                    </Link>
                </td>
            </tr>
        );

    }

}


WeightEntry.propTypes = {
    weight: PropTypes.object.isRequired,
    delete: PropTypes.func.isRequired,
};


export default WeightEntry;

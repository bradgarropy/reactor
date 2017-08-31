// react
import React from 'react';

// packages
import moment from 'moment';
import _ from 'lodash';

// components
import WeightForm from './WeightForm';

// api
import { getWeights, createWeight, deleteWeight } from '../api/weight';


class Weight extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            weights: [],
        };

        this.handleAdd = this.handleAdd.bind(this);

    }

    componentDidMount() {

        getWeights().then(
            weights => this.setState({ weights }),
        );

    }

    handleDelete(id) {

        deleteWeight(id).then(
            (weight) => {

                const weights = this.state.weights.filter(item => !_.isEqual(item, weight));
                this.setState({ weights });

            },
        );

    }

    handleAdd(newDate, newWeight) {

        const data = {
            newDate,
            newWeight,
        };

        createWeight(data).then(
            (weight) => {

                const weights = this.state.weights.slice();
                weights.push(weight);
                this.setState({ weights });

            });

    }

    render() {

        return (
            <div className="container">
                <h1>Weight</h1>

                <br />

                <WeightForm add={this.handleAdd} />

                <br />

                <table className="table table-bordered table-striped table-hover">
                    <tbody>
                        <tr>
                            <th className="text-center">Date</th>
                            <th className="text-center">Weight</th>
                            <th className="text-center">Delete</th>
                        </tr>

                        {this.state.weights.map(weight =>
                            (<tr key={weight._id}>
                                <td className="text-center">{moment(weight.date).utc().format('MM/DD/YYYY')}</td>
                                <td className="text-center">{weight.weight}</td>
                                <td className="text-center">
                                    <button onClick={() => this.handleDelete(weight._id)}>
                                        <span className="glyphicon glyphicon-trash text-danger" />
                                    </button>
                                </td>
                            </tr>),
                        )}

                    </tbody>
                </table>

            </div>
        );

    }

}


export default Weight;

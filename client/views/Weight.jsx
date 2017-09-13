// react
import React from 'react';

// packages
import _ from 'lodash';

// components
import WeightForm from '../components/weight/WeightForm';
import WeightEntry from '../components/weight/WeightEntry';

// api
import { getWeights, createWeight, deleteWeight } from '../api/weight';


class Weight extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            weights: [],
            editing: null,
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

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
            date: newDate,
            weight: newWeight,
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

                <WeightForm submit={this.handleAdd} />

                <br />

                <table className="table table-bordered table-striped table-hover">
                    <tbody>
                        <tr>
                            <th className="text-center">Date</th>
                            <th className="text-center">Weight</th>
                            <th className="text-center">Delete</th>
                            <th className="text-center">Edit</th>
                        </tr>

                        {this.state.weights.map(weight =>
                            (<WeightEntry
                                key={weight._id}
                                weight={weight}
                                delete={this.handleDelete}
                            />),
                        )}

                    </tbody>
                </table>

            </div>
        );

    }

}


export default Weight;

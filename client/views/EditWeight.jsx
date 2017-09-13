// react
import React from 'react';

// components
import WeightForm from '../components/weight/WeightForm';

// api
import { getWeight, updateWeight } from '../api/weight';


class EditWeight extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            weight: '',
        };

        this.handleUpdate = this.handleUpdate.bind(this);

    }

    componentDidMount() {

        getWeight(this.props.match.params.id).then(
            weight => this.setState({ weight }),
        );

    }


    handleUpdate(newDate, newWeight) {

        const data = {
            date: newDate,
            weight: newWeight,
        };

        updateWeight(this.state.weight._id, data).then(
            (weight) => {

                this.setState({ weight });
                this.props.history.push('/weight');

            });

    }

    render() {

        return (
            <div className="container">
                <h1>Edit Weight</h1>

                <br />

                <WeightForm
                    date={this.state.weight.date}
                    weight={this.state.weight.weight}
                    submit={this.handleUpdate}
                />

            </div>
        );

    }

}


export default EditWeight;

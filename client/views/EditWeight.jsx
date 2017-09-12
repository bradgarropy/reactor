// react
import React from 'react';

// components
import WeightForm from '../components/weight/WeightForm';

// api
import { getWeight, createWeight } from '../api/weight';


class EditWeight extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            weight: '',
        };

        this.handleAdd = this.handleAdd.bind(this);

    }

    componentDidMount() {

        getWeight(this.props.match.params.id).then(
            weight => this.setState({ weight }),
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
                <h1>Edit Weight</h1>

                <br />

                <WeightForm
                    date={this.state.weight.date}
                    weight={this.state.weight.weight}
                    add={this.handleAdd}
                />

            </div>
        );

    }

}


export default EditWeight;

// react
import React from 'react';

// components
import EditWeightForm from '../components/weight/EditWeightForm';

// api
import { getWeight } from '../api/weight';


class EditWeight extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            weight: {},
        };

    }

    componentDidMount() {

        getWeight(this.props.match.params.id)
            .then((response) => {

                const weight = response.data;
                this.setState({ weight });

            });

    }

    render() {

        return (
            <div className="container">
                <h1>Edit Weight</h1>

                <br />

                <EditWeightForm
                    id={this.state.weight._id}
                    date={this.state.weight.date}
                    weight={this.state.weight.weight}
                />

            </div>
        );

    }

}


export default EditWeight;

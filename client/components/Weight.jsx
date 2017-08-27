// react
import React from 'react';

// packages
import axios from 'axios';
import moment from 'moment';


function getWeights() {

    return axios.get('http://localhost:3000/api/weight')
        .then(response => response.data);

}


class Weight extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            weights: [],
        };

    }

    componentDidMount() {

        getWeights()
            .then(weights => this.setState({ weights }));

    }

    render() {

        return (
            <div className="container">
                <h1>Weight</h1>
                <br />
                <table className="table table-bordered table-striped table-hover">
                    <tbody>
                        <tr>
                            <th className="text-center">Date</th>
                            <th className="text-center">Weight</th>
                        </tr>

                        {this.state.weights.map(weight =>
                            (<tr key={weight._id}>
                                <td className="text-center">{moment(weight.date).format('MM/DD/YYYY')}</td>
                                <td className="text-center">{weight.weight}</td>
                            </tr>),
                        )}
                    </tbody>
                </table>
            </div>
        );

    }

}


export default Weight;

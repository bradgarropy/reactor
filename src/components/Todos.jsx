// react
import React from 'react';

// packages
import axios from 'axios';


function getTodos() {

    return axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.data);

}


class Todos extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            todos: [],
        };

    }

    componentDidMount() {

        getTodos()
            .then(todos => this.setState({ todos }));

    }


    render() {

        return (
            <div className="container">
                <h1>Todos</h1>
                <ul>
                    {this.state.todos.map(todo =>
                        <li key={todo.id}>{todo.title}</li>,
                    )}
                </ul>
            </div>
        );

    }

}


export default Todos;

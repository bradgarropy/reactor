// packages
import axios from 'axios';


export function getWeights() {

    return axios.get('http://localhost:3000/api/weight')
        .then(
            response => response.data,
        );

}


export function getWeight(id) {

    return axios.get(`http://localhost:3000/api/weight/${id}`)
        .then(
            response => response.data,
        );

}


export function createWeight(data) {

    return axios.post('http://localhost:3000/api/weight', data)
        .then(response => response.data);

}


export function updateWeight(id, data) {

    return axios.put(`http://localhost:3000/api/weight/${id}`, data)
        .then(
            response => response.data,
        );

}


export function deleteWeight(id) {

    return axios.delete(`http://localhost:3000/api/weight/${id}`)
        .then(
            response => response.data,
        );

}

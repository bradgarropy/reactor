// packages
import axios from 'axios';


export function getWeights() {

    return axios.get(`${process.env.API_URL}/api/weight`);

}


export function getWeight(id) {

    return axios.get(`${process.env.API_URL}/api/weight/${id}`);

}


export function createWeight(data) {

    return axios.post(`${process.env.API_URL}/api/weight`, data);

}


export function updateWeight(id, data) {

    return axios.put(`${process.env.API_URL}/api/weight/${id}`, data);

}


export function deleteWeight(id) {

    return axios.delete(`${process.env.API_URL}/api/weight/${id}`);

}

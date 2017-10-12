// packages
import axios from 'axios';


export function getUsers() {

    return axios.get('http://localhost:3000/api/user');

}


export function getUser(id) {

    return axios.get(`http://localhost:3000/api/user/${id}`);

}


export function createUser(data) {

    return axios.post('http://localhost:3000/api/user', data);

}


export function updateUser(id, data) {

    return axios.put(`http://localhost:3000/api/user/${id}`, data);

}

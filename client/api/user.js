// packages
import axios from 'axios';


export function getUsers() {

    return axios.get(`${process.env.API_URL}/api/user`);

}


export function getUser(id) {

    return axios.get(`${process.env.API_URL}/api/user/${id}`);

}


export function createUser(data) {

    return axios.post(`${process.env.API_URL}/api/user`, data);

}


export function updateUser(id, data) {

    return axios.put(`${process.env.API_URL}/api/user/${id}`, data);

}

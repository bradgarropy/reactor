// packages
import axios from 'axios';


export default function login(data) {

    return axios.post(`${process.env.API_URL}/api/login`, data);

}

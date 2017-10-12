// packages
import axios from 'axios';


export default function login(data) {

    return axios.post('http://localhost:3000/api/login', data);

}

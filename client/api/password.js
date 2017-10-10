// packages
import axios from 'axios';


export default function changePassword(data) {

    return axios.post('http://localhost:3000/api/password', data)
        .then(response => response.data)
        .catch(error => error.response.data);

}

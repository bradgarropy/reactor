// packages
import axios from 'axios';


export default function resetPassword(token, data) {

    return axios.post(`http://localhost:3000/api/reset/${token}`, data)
        .then(response => response.data)
        .catch(error => error.response.data);

}

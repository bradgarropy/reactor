// packages
import axios from 'axios';


export default function changePassword(data) {

    return axios.post(`${process.env.API_URL}/api/password`, data);

}

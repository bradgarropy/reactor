// packages
import axios from 'axios';


export default function resetPassword(token, data) {

    return axios.post(`${process.env.API_URL}/api/reset/${token}`, data);

}

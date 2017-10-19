// packages
import axios from 'axios';


export default function feedback(data) {

    return axios.post(`${process.env.API_URL}/api/feedback`, data);

}

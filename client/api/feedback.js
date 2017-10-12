// packages
import axios from 'axios';


export default function feedback(data) {

    return axios.post('http://localhost:3000/api/feedback', data);

}

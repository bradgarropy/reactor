// packages
import axios from 'axios';


export default function login(data) {

    console.log(process.env);
    console.log(`'${process.env.API_URL}'`);

    return axios.post(`${process.env.API_URL}/api/login`, data);

}

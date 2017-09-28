// packages
import jwtDecode from 'jwt-decode';


export function isAuthenticated() {

    const token = localStorage.getItem('token');

    if (token) {

        return true;

    }

    return false;

}


export function userInfo() {

    const token = localStorage.getItem('token');

    if (!token) {

        return {};

    }

    const user = jwtDecode(token);

    return user;

}

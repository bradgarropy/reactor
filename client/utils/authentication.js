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


export function userId() {

    const user = userInfo();

    if (!user) {

        return undefined;

    }

    return user.id;

}


export function userFirstName() {

    const user = userInfo();

    if (!user) {

        return undefined;

    }

    return user.first_name;

}

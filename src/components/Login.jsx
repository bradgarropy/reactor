// react
import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => (

    <div className="container">
        <h1>Login</h1>
        <br />
        <form method="post" action="/user/login">
            <div className="form-group">
                <label>Email</label>
                <input className="form-control" type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" name="password" placeholder="Password" />
            </div>
            <button className="btn btn-default" type="submit">Submit</button>
            <div className="pull-right">
                <Link to="/forgot">Forgot Password?</Link>
            </div>
        </form>
    </div>

);


export default Login;

// react
import React from 'react';


const Register = () => (

    <div className="container">
        <h1>Register</h1>
        <br />
        <form method="post" action="/user/register">
            <div className="form-group">
                <label>First Name</label>
                <input className="form-control" type="text" name="first_name" placeholder="First Name" />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input className="form-control" type="text" name="last_name" placeholder="Last Name" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input className="form-control" type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input className="form-control" type="password" name="confirmation" placeholder="Confirm Password" />
            </div>
            <button className="btn btn-default" type="submit">Submit</button>
        </form>
    </div>

);


export default Register;

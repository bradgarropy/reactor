// react
import React from 'react';


const Forgot = () => (

    <div className="container">
        <h1>Forgot</h1>
        <br />
        <form method="post" action="/user/forgot">
            <div className="form-group">
                <label>Email</label>
                <input className="form-control" type="email" name="email" placeholder="Email" />
            </div>
            <button className="btn btn-default" type="submit">Submit</button>
        </form>
    </div>

);


export default Forgot;

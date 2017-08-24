// react
import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => (

    <div className="container">
        <h1>Welcome.</h1>
        <h4>
            Please <Link to="/register">register</Link> or <Link to="/login">login</Link>.
        </h4>
    </div>

);


export default Welcome;

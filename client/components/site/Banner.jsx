// react
import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => (
    <div className="alert alert-warning banner">
        <div className="text-center">
                This site is under development.
                Please give us your <Link to="/feedback">feedback</Link>.
        </div>
    </div>
);


export default Banner;

// react
import React from 'react';


const WeightForm = () => (
    <div className="container">

        <h1>Add Weight</h1>

        <br />

        <form method="post" action="/weight">
            <div className="form-group">
                <label>Date</label>
                <input className="form-control" type="date" name="date" />
            </div>
            <div className="form-group">
                <label>Weight</label>
                <input className="form-control" type="number" name="weight" />
            </div>
            <button className="btn btn-default" type="submit">Submit</button>
        </form>

    </div>
);


export default WeightForm;

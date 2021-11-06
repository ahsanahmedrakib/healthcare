import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" src="https://i.ibb.co/qg9ryG6/404.jpg" alt="" />
            <Link to="/"><button className="btn btn-secondary">GO HOME</button></Link>
        </div>
    );
};

export default NotFound;
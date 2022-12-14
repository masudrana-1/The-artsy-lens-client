import React from 'react';
import { Link } from 'react-router-dom';
import './AllService.css'

const AllService = ({ service }) => {

    const { _id, title, img, price, rating, details } = service;

    // console.log(_id);

    return (
        <div className="card card-compact height w-4/5 shadow-2xl shadow-cyan-500/50 m-auto my-6 ">
            <figure>
                <img className='w-full' src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="">Price: ${price}</p>
                <h2 className="">Rating: {rating}</h2>
                <p>{details.slice(0, 200)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`} className="btn btn-primary shadow-lg shadow-cyan-500/50">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default AllService;
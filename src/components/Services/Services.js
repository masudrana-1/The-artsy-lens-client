import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {

    const { _id, title, img, rating, details } = service;

    return (
        <div>
            <div className="hero bg-base-200 h-auto m-auto rounded-2xl p-8 mt-10 shadow-2xl">
                <div className="hero-content w-full md:w-4/5 flex-col lg:flex-row">
                    <img src={img} className="h-96 rounded-lg shadow-2xl" />
                    <div className='w-full'>
                        <h1 className="text-5xl font-bold mt-2">{title}</h1>
                        <span className="">Rating: {rating}</span>
                        <p className="py-6">{details.slice(0, 150)}</p>
                        <Link to={`/details/${_id}`} className="btn btn-primary shadow-lg shadow-cyan-500/50">See details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
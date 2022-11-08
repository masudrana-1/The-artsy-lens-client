import React from 'react';

const Services = ({ service }) => {

    const { title, img, rating, price, details } = service;

    return (
        <div>
            <div className="hero bg-base-200 w-4/5 m-auto rounded-2xl p-8 mt-10 shadow-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm h-96 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold mt-2">{title}</h1>
                        <p className="text-xl mt-2">Price: ${price}</p>
                        <span className="">Rating: {rating}</span>
                        <p className="py-6">{details}</p>
                        <button className="btn btn-primary">See details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
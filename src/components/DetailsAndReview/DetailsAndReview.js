import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsAndReview = () => {

    const serviceDetails = useLoaderData();

    const { title, img, price, rating, details } = serviceDetails;

    // console.log(details);

    return (
        <div className="card w-5/6 m-auto glass my-10 shadow-2xl">
            <figure><img className='w-full' src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-500'>Price: ${price}</p>
                <p>Rating: {rating}</p>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsAndReview;
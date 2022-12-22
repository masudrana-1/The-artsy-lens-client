import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import './AllService.css'

const AllService = ({ service }) => {

    const { _id, title, img, price, rating, details } = service;

    // console.log(_id);

    return (
        <div className="card card-compact height w-4/5 bg-base-100 shadow-xl m-auto my-6 ">
            <figure>
                <img className='w-full' src={img} alt="Shoes" />

                {/* <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider> */}

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
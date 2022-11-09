import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsAndReview = () => {

    const serviceDetails = useLoaderData();

    const { _id, title, img, price, rating, details } = serviceDetails;

    // console.log(details);


    const handleReview = event => {
        event.preventDefault();
    }

    return (
        <div>
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
            <hr />
            <div>
                <form onSubmit={handleReview} className='m-auto my-10 w-3/4'>
                    <h1 className='mt-4 text-center text-2xl text-orange-600'>Please review this service</h1>
                    <hr className='w-1/4 text-green-500 m-auto' />
                    <input type="text" name='name' placeholder="your name" className="input input-bordered input-error w-full mt-6" /> <br />
                    <input type="text" name='email' placeholder="your email" className="input input-bordered input-error w-full mt-3" /> <br />
                    <input type="text" defaultValue={title} name='service' placeholder="service" className="input input-bordered input-error w-full mt-3" /> <br />
                    <input type="text" defaultValue={_id} name='id' placeholder="service id" className="input input-bordered input-error w-full mt-3" /> <br />
                    <textarea className="textarea textarea-error w-full h-40 mt-3" placeholder="Review"></textarea> <br />
                    <input className='btn mt-5' type="submit" value="Review" />
                </form>
            </div>
        </div>
    );
};

export default DetailsAndReview;
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const DetailsAndReview = () => {

    const serviceDetails = useLoaderData();

    const { _id, title, img, price, rating, details } = serviceDetails;

    // console.log(details);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    const handleReview = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const serviceName = form.service.value;
        const serviceId = form.id.value;
        const comment = form.comment.value;

        // console.log(name, email, serviceName, serviceId, comment);


        const reviews = {
            serviceId: serviceId,
            serviceName: serviceName,
            name: name,
            email: email,
            comment: comment
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('reviewed successfully');
                    form.reset();
                }
            })
            .catch(error => console.error(error))


    }

    return (
        <div>
            <div className="card w-full m-auto glass my-10 shadow-2xl">
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
                    <hr className='w-1/4 m-auto' />
                    <input type="text" name='name' placeholder="your name" className="input input-bordered input-ghost w-full mt-6" /> <br />
                    <input type="text" name='email' placeholder="your email" className="input input-bordered input-ghost w-full mt-3" /> <br />
                    <input type="text" defaultValue={title} name='service' placeholder="service" className="input input-bordered input-ghost w-full mt-3" /> <br />
                    <input type="text" defaultValue={_id} name='id' placeholder="service id" className="input input-bordered input-ghost w-full mt-3" /> <br />
                    <textarea name='comment' className="textarea textarea-bordered textarea-ghost w-full h-40 mt-3" placeholder="comment"></textarea> <br />
                    <input className='btn mt-5 btn-error' type="submit" value="Review" />
                </form>
            </div>
            <div className='my-8'>
                {
                    reviews.map(review => <Review key={review?._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default DetailsAndReview;
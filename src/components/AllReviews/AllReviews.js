import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewDetails from './ReviewDetails';

const AllReviews = () => {

    // const allreviews = useLoaderData();

    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure to cancel this order?');

        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Order delete successfully');
                        const remaining = reviews?.filter(order => order._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            {
                reviews?.map(review => <ReviewDetails
                    key={review?._id}
                    review={review}
                    handleDelete={handleDelete}
                ></ReviewDetails>)
            }
        </div>
    );
};

export default AllReviews;
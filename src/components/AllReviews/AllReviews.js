import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import { AuthContext } from '../Context/AuthProvider';
import ReviewDetails from './ReviewDetails';

const AllReviews = () => {

    // const allreviews = useLoaderData();

    const { user, logOut } = useContext(AuthContext);

    const [reviews, setReviews] = useState();

    console.log(reviews);

    useEffect(() => {
        // console.log(user?.email, localStorage.getItem('artsy-token'));
        if (user?.email && localStorage.getItem('artsy-token')) {

            fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('artsy-token')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return logOut()
                    }
                    return res.json()
                })
                .then(data => {
                    setReviews(data)
                    // console.log(data)
                })
        }
        // if (!user?.email || !localStorage.getItem('artsy-token')) return;
    }, [user?.email, logOut])

    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure to cancel this order?');

        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
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

    const handleReviewUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(review => review._id !== id);
                    const approving = reviews.find(review => review._id === id);
                    approving.status = 'Approved';


                    const newReviews = [approving, ...remaining];
                    setReviews(newReviews);
                }
            })
    }

    useTitle('All reviews')

    return (
        <div>
            {
                reviews?.map(review => <ReviewDetails
                    key={review?._id}
                    review={review}
                    handleDelete={handleDelete}
                    handleReviewUpdate={handleReviewUpdate}
                ></ReviewDetails>)
            }
        </div>
    );
};

export default AllReviews;
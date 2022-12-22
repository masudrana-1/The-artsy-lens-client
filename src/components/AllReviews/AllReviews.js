import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import { AuthContext } from '../Context/AuthProvider';
import ReviewDetails from './ReviewDetails';

const AllReviews = () => {

    const { user, logOut } = useContext(AuthContext);

    const [reviews, setReviews] = useState();

    const [view, setView] = useState(false);

    // console.log(reviews);

    useEffect(() => {
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
                })
        }
    }, [user?.email, logOut, view])

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



    useTitle('All reviews')

    return (
        <div>
            <h1 className='text-6xl text-center mb-2 font-bold text-orange-500'>My all reviews</h1>
            <hr className='mb-8' />

            {
                reviews?.map(review => <ReviewDetails
                    key={review?._id}
                    review={review}
                    handleDelete={handleDelete}
                    view={view}
                    setView={setView}
                ></ReviewDetails>)
            }
        </div>
    );
};

export default AllReviews;
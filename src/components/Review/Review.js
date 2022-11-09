import React from 'react';

const Review = ({ review }) => {

    const { name, email, serviceName, comment } = review;

    return (
        <div className='border rounded-2xl p-7 shadow-2xl mt-6 m-auto border-orange-500 w-2/4'>
            <h1>{name}</h1>
            <p>{serviceName}</p>
            <p>{comment}</p>
        </div>
    );
};

export default Review;
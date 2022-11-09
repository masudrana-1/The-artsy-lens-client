import React from 'react';

const ReviewDetails = ({ review, handleDelete }) => {

    const { _id, name, serviceName, comment } = review;

    return (
        <div className='border rounded-2xl p-10 shadow-2xl my-10 m-auto border-orange-500 w-3/4'>
            <h1 className='text-xl font-bold text-rose-500'>{name}</h1>
            <p className='text-xs'>{serviceName}</p>
            <p className='text-base'>{comment}</p>
            <button onClick={() => handleDelete(_id)} className='btn btn-warning mt-5'>Delete</button>
        </div>
    );
};

export default ReviewDetails;
import React from 'react';
import useTitle from '../../hook/useTitle';

const Review = ({ review }) => {

    const { name, email, serviceName, comment } = review;

    useTitle('Reviews');

    return (
        <div className='border rounded-2xl p-7 shadow-2xl mt-6 m-auto border-orange-500 w-2/4'>
            <h1 className='text-xl'>{name}</h1>
            <p className='text-xs'>{serviceName}</p>
            <p className='text-base'>{comment}</p>
        </div>
    );
};

export default Review;
import React, { useContext, useState } from 'react';
import useTitle from '../../hook/useTitle';
import { AuthContext } from '../Context/AuthProvider';

const ReviewDetails = ({ review, handleDelete, view, setView }) => {

    const { user } = useContext(AuthContext);

    const { _id, name, serviceImg, serviceName, comment } = review;


    const handleUpdateReview = event => {
        event.preventDefault();
        // console.log(user);

        const form = event.target;

        // console.log(form);
        const name = form.name.value;
        const email = form.email.value;
        const serviceName = form.service.value;
        const serviceId = form.id.value;
        const comment = form.comment.value;

        const reviews = {
            serviceId: serviceId,
            serviceName: serviceName,
            serviceImg: serviceImg,
            name: name,
            email: email,
            comment: comment
        }


        // console.log(reviews)

        fetch(`https://the-artsy-lens-server-site.vercel.app/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                setView(!view);
                if (data.modifiedCount > 0) {

                    alert('Successfully Updated review');
                }
                console.log(data);
            })




    }


    useTitle('Review Details')

    return (
        <div className='flex flex-row gap-10 border rounded-2xl p-10 shadow-2xl my-10 m-auto border-orange-500 w-3/4'>
            <div>
                <img className='h-40 w-40 rounded-lg' src={serviceImg} alt="" />
            </div>
            <div>
                <h1 className='text-xl font-bold text-rose-500'>{name}</h1>
                <p className='text-xs'>{serviceName}</p>
                <p className='text-base'>{comment}</p>
                <button onClick={() => handleDelete(_id)} className='btn btn-warning my-5 inline'>Delete</button>
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn btn-info ml-4">Edit Review</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <form onSubmit={handleUpdateReview} className="modal-box relative">
                        <h1 className='mt-4 text-center text-2xl text-orange-600'>Please review this service</h1>
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="your name" className="input input-bordered input-ghost w-full mt-6" /> <br />
                        <input type="text" name='email' defaultValue={user?.email} placeholder="your email" className="input input-bordered input-ghost w-full mt-3" /> <br />
                        <input type="text" defaultValue={serviceName} name='service' placeholder="service" className="input input-bordered input-ghost w-full mt-3" /> <br />
                        <input type="text" defaultValue={_id} name='id' placeholder="service id" className="input input-bordered input-ghost w-full mt-3" /> <br />
                        <textarea name='comment' defaultValue={comment} className="textarea textarea-bordered textarea-ghost w-full h-40 mt-3" placeholder="comment"></textarea> <br />
                        <input className='btn' type="submit" value="Done" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;
import React, { useContext } from 'react';
import useTitle from '../../hook/useTitle';
import { AuthContext } from '../Context/AuthProvider';

const ReviewDetails = ({ review, handleDelete, handleReviewUpdate }) => {

    const { user } = useContext(AuthContext);

    const { _id, name, img, serviceName, comment } = review;

    const handleEditReview = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const serviceName = form.serviceName.value;
        const serviceId = form.id.value;
        const comment = form.comment.value;


        const reviews = {
            serviceId: serviceId,
            serviceName: serviceName,
            serviceImg: img,
            name: name,
            email: email,
            comment: comment
        }
    }


    useTitle('Review Details')

    return (
        <div className='border rounded-2xl p-10 shadow-2xl my-10 m-auto border-orange-500 w-3/4'>
            <h1 className='text-xl font-bold text-rose-500'>{name}</h1>
            <p className='text-xs'>{serviceName}</p>
            <p className='text-base'>{comment}</p>
            <button onClick={() => handleDelete(_id)} className='btn btn-warning my-5'>Delete</button>
            {/* <button className='btn btn-success ml-4'>Edit</button> */}
            <div>
                {/* The button to open modal */}
                <label htmlFor="my-modal" className="btn btn-success">Edit</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <form onSubmit={() => handleReviewUpdate(_id)} className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Edit this review</h3>
                        <h1 className='mt-4 text-center text-2xl text-orange-600'>Please review this service</h1>
                        <hr className='w-1/4 m-auto' />
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="your name" className="input input-bordered input-ghost w-full mt-6" /> <br />
                        <input type="text" name='email' defaultValue={user?.email} placeholder="your email" className="input input-bordered input-ghost w-full mt-3" /> <br />
                        <input type="text" defaultValue={serviceName} name='service' placeholder="service" className="input input-bordered input-ghost w-full mt-3" /> <br />
                        <input type="text" defaultValue={_id} name='id' placeholder="service id" className="input input-bordered input-ghost w-full mt-3" /> <br />
                        <textarea name='comment' className="textarea textarea-bordered textarea-ghost w-full h-40 mt-3" placeholder="comment"></textarea> <br />
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Update</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewDetails;
import React from 'react';
import useTitle from '../../hook/useTitle';

const AddService = () => {

    const handleAddService = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const imgUrl = form.imgUrl.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const details = form.details.value;


        const services = {
            title: name,
            img: imgUrl,
            rating: rating,
            price: price,
            details: details
        }

        fetch('https://the-artsy-lens-server-site-masudrana-1.vercel.app/allservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Service added successfully');
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }

    useTitle('Add service');

    return (
        <div>
            <form onSubmit={handleAddService} className='m-auto my-10 w-3/4'>
                <h1 className='mt-4 text-center text-2xl text-orange-600'>Add any service</h1>
                <hr className='w-1/4 m-auto' />
                <input type="text" name='name' placeholder="service name" className="input input-bordered input-ghost w-full mt-6" /> <br />
                <input type="text" name='imgUrl' placeholder="img url" className="input input-bordered input-ghost w-full mt-3" /> <br />
                <input type="text" name='rating' placeholder="Add rating 5/5" className="input input-bordered input-ghost w-full mt-3" /> <br />
                <input type="text" name='price' placeholder="service price" className="input input-bordered input-ghost w-full mt-3" /> <br />
                <textarea name='details' className="textarea textarea-bordered textarea-ghost w-full h-40 mt-3" placeholder="service details"></textarea> <br />
                <input className='btn mt-5 btn-error' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddService;
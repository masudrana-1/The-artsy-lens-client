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

        fetch('http://localhost:5000/allservices', {
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
            <form onSubmit={handleAddService} className='m-auto my-10 w-3/4 shadow-lg shadow-cyan-500/50 p-10 rounded-xl'>
                <h1 className='mt-4 text-center text-2xl text-orange-600'>Add Your service</h1>
                <hr className='w-1/4 m-auto' />
                <input type="text" name='name' placeholder="service name" className="input input-bordered input-ghost w-full mt-6" /> <br />
                <input type="text" name='imgUrl' placeholder="img url" className="input input-bordered input-ghost w-full mt-3" /> <br />
                <input type="text" name='rating' placeholder="Add rating 5/5" className="input input-bordered input-ghost w-full mt-3" /> <br />
                <input type="text" name='price' placeholder="service price" className="input input-bordered input-ghost w-full mt-3" /> <br />
                <textarea name='details' className="textarea textarea-bordered textarea-ghost w-full h-40 mt-3" placeholder="service details"></textarea> <br />
<<<<<<< HEAD
                <input className='btn mt-5 btn-error shadow-lg shadow-cyan-500/50' type="submit" value="Add" />
=======
                <input className='btn mt-5 btn-primary' type="submit" value="Add" />
>>>>>>> 2e6876a (added background and fixed color issue)
            </form>
        </div>
    );
};

export default AddService;
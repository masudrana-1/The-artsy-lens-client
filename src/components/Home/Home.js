import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {

    const services = useLoaderData();
    // console.log(allServices);

    return (
        <div>
            <Banner></Banner>
            <div>
                <div>
                    {
                        services.map(service => <Services key={service?._id} service={service}></Services>)
                    }
                </div>
                <div className='text-center'>
                    <Link to='/allservices' className="btn btn-active btn-error my-5">See all services</Link>
                </div>
            </div>
            <div>
                <div className='bg-orange-200 rounded-xl my-6 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-5 p-10'>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold text-orange-500'>We are open Saturday - thursday</h1>
                        <p className='text-rose-500'>8.00 AM - 10 PM</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold text-orange-500'>Have some question?</h1>
                        <p className='text-rose-500'>Please call - +9908637673</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold text-orange-500'>Our address</h1>
                        <p className='text-rose-500'>Mirpur, Dhaka</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
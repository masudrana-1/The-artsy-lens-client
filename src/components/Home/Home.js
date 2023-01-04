import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {

    const services = useLoaderData();
    // console.log(allServices);

    // dynamic title 
    useTitle('Home');

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
<<<<<<< HEAD
                    <Link to='/allservices' className="btn btn-active btn-error my-5 shadow-lg shadow-cyan-500/50">See all services</Link>
=======
                    <Link to='/allservices' className="btn btn-active btn-primary my-5">See all services</Link>
>>>>>>> 2e6876a (added background and fixed color issue)
                </div>
            </div>
            <div>
                <div className='shadow-lg shadow-cyan-500/50 my-6 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-5 p-10'>
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
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 shadow-lg shadow-cyan-500/50 p-10 rounded-2xl my-10'>
                <div className=''>
                    <h1 className='text-5xl  font-bold mb-3'>Ready to join.</h1>
                    <p>It is a long established fact that a reader will be distracted by <br /> the readable content of a page when looking at its layout.</p>
                </div>
                <div className='text-end'>
                    <Link className='btn btn-error shadow-lg shadow-cyan-500/50 w-2/5 mt-8' to='/register'>SignUp</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
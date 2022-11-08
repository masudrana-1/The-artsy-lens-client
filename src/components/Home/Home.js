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
                {
                    services.map(service => <Services key={service?._id} service={service}></Services>)
                }
            </div>
            <div className='text-center'>
                <Link to='/allservices' className="btn btn-active btn-error my-5">See all services</Link>
            </div>
        </div>
    );
};

export default Home;
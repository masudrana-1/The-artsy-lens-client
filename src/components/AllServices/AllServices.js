import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllService from '../AllService/AllService';

const AllServices = () => {

    const allServices = useLoaderData();

    // console.log(allServices)

    return (
        <div>
            {
                allServices.map(service => <AllService key={service?._id} service={service}></AllService>)
            }
        </div>
    );
};

export default AllServices;
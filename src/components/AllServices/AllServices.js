import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import AllService from '../AllService/AllService';

const AllServices = () => {

    const allServices = useLoaderData();

    // console.log(allServices)

    useTitle('All services')

    return (
        <div>
            {
                allServices.map(service => <AllService key={service?._id} service={service}></AllService>)
            }
        </div>
    );
};

export default AllServices;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
     
    const service = useLoaderData();
console.log(service)
    const {name, price, description, image} = service.data;
    return (
        <div className='pt-28'>
            <h1 className='text-5xl text-yellow-50'>{name}</h1>
        </div>
    );
};

export default ServiceDetails;
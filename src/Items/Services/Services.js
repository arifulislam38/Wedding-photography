import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data => {
            setServices(data.data)
            console.log(data.data)
        })
    },[]);

    



    return (
        <div className='w-[90%] mx-auto  mb-44 relative'>

            <div className='mb-10 text-semibold font-serif w-1/2'>
                <h1 className='text-5xl mb-4 text-yellow-50'>My Services</h1>
                <p className='text-2xl text-gray-500'>Helping businesses through photography is what makes my job meaningful. Explore some of my recent work down below.</p>
            </div>

            <div className='grid grid-cols-3 gap-5'>
            

            {
                services?.map(service => { 
                    return <div key={service._id} className='rounded-md w-full h-auto relative -skew-x-12'>
                    <img className='w-full  rounded-md' src={service.image} alt="" />
                    <div className=' text-yellow-50  w-full p-4  flex flex-col gap-3 bg-[rgba(192,192,12,0.1)]'>
                    <div className='flex justify-between items-center'>
                    <h1 className='text-3xl'>{service.name}</h1>
                    <p className='text-3xl'>{service.price}</p>
                    </div>
                    <p>{service.description.length > 150 ? service.description.slice(0,150) + ' .....' : service.description}</p>
                    <button className='bg-yellow-100 rounded p-2 text-gray-500 text-2xl '><Link to={`/service/${service._id}`}>View Details</Link></button>
                    </div>
                    </div>
                })
            }
            



            
            </div>
            <button className='text-2xl font-semibold font-serif bg-yellow-200 p-3 rounded absolute right-16  mt-4 -skew-x-12'><Link to='/services'>View All Services</Link></button>
        </div>
    );
};

export default Services;
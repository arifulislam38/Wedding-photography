import React from 'react';
import image1 from '../../assets/wedding-1.jpg';
import image2 from '../../assets/wedding-2.jpg';
import image3 from '../../assets/wedding-3.jpg';
const Services = () => {
    return (
        <div className='w-[90%] mx-auto  mb-44 relative'>

            <div className='mb-10 text-semibold font-serif w-1/2'>
                <h1 className='text-5xl mb-4 text-yellow-50'>My Services</h1>
                <p className='text-2xl text-gray-500'>Helping businesses through photography is what makes my job meaningful. Explore some of my recent work down below.</p>
            </div>

            <div className='grid grid-cols-3 gap-5'>
                <div className='rounded-md w-full h-[250px] relative bg-black'>
                <img className='w-full h-full rounded-md' src={image1} alt="" />
            <div className='text-center text-2xl font-semibold text-yellow-200 font-serif w-full h-full  flex flex-col items-center justify-center bg-[rgba(192,192,12,0.1)]  absolute top-0 '>
                <h1>Wedding Album</h1>
                <p>Price: $200</p>
            </div>
            </div>


            <div className='rounded-md w-full h-[250px] relative bg-black'>
                <img className='w-full h-full rounded-md' src={image1} alt="" />
            <div className='text-center text-2xl font-semibold text-yellow-200 font-serif w-full h-full  flex flex-col items-center justify-center bg-[rgba(192,192,12,0.1)]  absolute top-0 '>
                <h1>Wedding Album</h1>
                <p>Price: $200</p>
            </div>
            </div>



            <div className='rounded-md w-full h-[250px] relative bg-black'>
                <img className='w-full h-full rounded-md' src={image1} alt="" />
            <div className='text-center text-2xl font-semibold text-yellow-200 font-serif w-full h-full  flex flex-col items-center justify-center bg-[rgba(192,192,12,0.1)]  absolute top-0 '>
                <h1>Wedding Album</h1>
                <p>Price: $200</p>
            </div>
            </div>
            </div>
            <button className='text-2xl font-semibold font-serif bg-yellow-200 p-3 rounded absolute right-0  mt-4'>View All Services</button>
        </div>
    );
};

export default Services;
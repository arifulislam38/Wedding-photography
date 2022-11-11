import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const Services = () => {

    const [services, setServices] = useState([]);

    const [spinner, setSpinner] = useState(true);

    useEffect(()=>{
        setSpinner(true)
        fetch('https://wedding-photography-123.vercel.app/service')
        .then(res=> res.json())
        .then(data => {
            setServices(data.data);
            setSpinner(false);
           
        })
    },[]);

    



    return (
        <div className='w-[90%] mx-auto  mb-44 relative'>

            <div className='mb-10 text-semibold font-serif lg:w-1/2'>
                <h1 className='text-5xl mb-4 text-yellow-50'>My Services</h1>
                <p className='text-2xl text-gray-500'>Helping businesses through photography is what makes my job meaningful. Explore some of my recent work down below.</p>
            </div>

            


                <div className={`mt-20 w-full h-full justify-center flex flex-wrap items-center gap-2 ${spinner ? 'block' : 'hidden'}`}>
                    <Spinner
                            aria-label="Extra large spinner example"
                            size="xl"
                        />
                </div>



            <div className='grid lg:grid-cols-3 gap-5'>
            

            {
                services?.map(service => { 
                    return <div key={service._id} className='rounded-md w-full h-auto relative shadow-md shadow-yellow-50 hover:scale-[101%] hover:shadow-xl'>
                    <PhotoProvider>
                        <PhotoView src={service.image}>
                            <img className='w-full  rounded-md' src={service.image} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    <div className=' text-yellow-50  w-full p-4  flex flex-col gap-3 bg-[rgba(192,192,12,0.1)]'>
                    <div className='flex justify-between items-center'>
                    <h1 className='text-3xl'>{service.name}</h1>
                    <p className='text-3xl'>{service.price}</p>
                    </div>
                    <p>{service.description.length > 150 ? service.description.slice(0,150) + ' .....' : service.description}</p>
                    <button className='bg-yellow-100 rounded p-2 text-gray-500 text-2xl hover:scale-[101%]'><Link to={`/service/${service._id}`}>View Details</Link></button>
                    </div>
                    </div>
                })
            }
            



            
            </div>
            <button className='text-2xl font-semibold font-serif bg-yellow-200 p-3 rounded absolute right-16  mt-4 hover:scale-[102%]'><Link to='/services'>View All Services</Link></button>
        </div>
    );
};

export default Services;
import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../Items/Title/Title';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Services = () => {

    const [services, setServices] = useState([]);

    const [spinner, setSpinner] = useState(true);

    UseTitle('Services');

    useEffect(()=>{
        setSpinner(true)
        fetch('https://wedding-photography-123.vercel.app/services')
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            setServices(data.data)
            setSpinner(false)
        })
    }, []);


    return (
        <>
        <h1 className='text-6xl text-yellow-50 font-semibold font-serif text-center pt-28'>Here is My all services for you</h1>

         <div className={`mt-20 w-full h-full justify-center flex flex-wrap items-center gap-2 ${spinner ? 'block' : 'hidden'}`}>
                    <Spinner
                            aria-label="Extra large spinner example"
                            size="xl"
                        />
        </div>

            <div className='w-[85%] mx-auto grid lg:grid-cols-3 gap-5 mt-20'>
            {
                services?.map(service => { 
                    return <div key={service._id} className='rounded-md w-full h-auto relative'>
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
                    <button className='bg-yellow-100 rounded p-2 text-gray-500 text-2xl '><Link to={`/service/${service._id}`}>View Details</Link></button>
                    </div>
                    </div>
                })
            }
        </div>
        </>
    );
};

export default Services;
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';

const ServiceDetails = () => {
     
    const service = useLoaderData();

    const {user} = useContext(AuthProvider);

    const {name, price, description, image} = service.data;

    const handleSubmit = event =>{
        event.preventDefault();
        const badge = event.target.option.value;
        const details = event.target.textarea.value;
        
        const review = {
            name,
            email: user?.email,
            image: user?.photoURL,
            badge,
            details
        };

        fetch('http://localhost:5000/review',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.success){
                toast.success(data.message)
            }
        })

    }

    return (
        <div className='py-40 px-10'>
            <div className='grid grid-cols-2 gap-8'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='border'>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center gap-5 p-4'>
                        <select className='w-full bg-gray-200 rounded p-4 text-xl border-none' name="option" id='' required >
                            <option value="excellent" selected >Excellent</option>
                            <option value="good" >Good</option>
                        </select>
                        <textarea className=' w-full bg-gray-200 rounded p-4 text-xl border-none' rows={5} cols='70' name='textarea' required></textarea>
                        <button type="submit" className='p-3 text-2xl bg-yellow-50 rounded'>Give your review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
import React from 'react';
import toast from 'react-hot-toast';

const Inspired = () => {

    const handleInspired = event =>{
        event.preventDefault();
        toast.success('Thanks for your inspiration. Good Wish for you');
        event.target.reset();
    }

    return (
        <div className='lg:flex gap-8 justify-center items-center py-28 px-10'>
            <div className='p-4 lg:w-1/2 sm:mb-8'>
                <h1 className="text-5xl text-yellow-100 font-serif font-semibold mb-8">Feel inspired?</h1>
                <p className="text-2xl font-serif font-semibold text-gray-500">Lets connect! I'd love to shoot your story and how I might be able to help through photography.</p>
            </div>
            <div className='p-4 border rounded lg:w-1/2'>
                <form className='w-full flex flex-col gap-10 '>
                    <div className='w-full flex items-center gap-3'>
                        <input className='text-xl text-gray-500 p-2 rounded w-1/2' type="text" placeholder='First Name' required/>
                        <input className='text-xl text-gray-500 p-2 rounded w-1/2' type="text"  placeholder='Last Name' required/>
                    </div>
                    <div className='w-full flex items-center gap-3'>
                        <input className='text-xl text-gray-500 p-2 rounded w-1/2' type="email" placeholder='Your Email' required/>
                        <input className='text-xl text-gray-500 p-2 rounded w-1/2' type="phone" placeholder='Your Phone' required/>
                    </div>
                    <button className='p-3 rounded bg-yellow-200 text-2xl font-serif' type='submit' onClick={handleInspired}>Email Me</button>
                </form>
            </div>
        </div>
    );
};

export default Inspired;
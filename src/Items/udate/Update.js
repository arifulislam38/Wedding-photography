import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const handleSubmit = event =>{
        event.preventDefault();

        const text = event.target.text.value;

        fetch(`https://wedding-photography-123.vercel.app/updates/${data.data._id}`,{
            method: "PATCH",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify({details: text})
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
               navigate('/reviews');
                toast.success('success');
            }
        })
        
        }
    


    return (
        <div className='pt-28 w-full h-screen'>
            <form onSubmit={handleSubmit} className='w-[50%] mx-auto flex flex-col gap-5 border p-4 rounded'>
                <textarea className='w-full rounded text-2xl font-semibold' name="text" id="" cols="30" rows="10"/>
                <button className='p-4 border text-2xl font-serif bg-yellow-100 rounded' type="submit">Update</button>
            </form>
        </div>
    );
};

export default Update;
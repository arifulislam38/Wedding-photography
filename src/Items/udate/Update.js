import React from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLoaderData } from 'react-router-dom';

const Update = () => {
    const data = useLoaderData();

    const handleSubmit = event =>{
        event.preventDefault();

        const text = event.target.text.value;

        fetch(`http://localhost:5000/updates/${data.data._id}`,{
            method: "PATCH",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify({details: text})
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                <Navigate to='/reviews' replace></Navigate>
                toast.success('success')
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